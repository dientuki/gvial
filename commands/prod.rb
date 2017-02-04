usage       'prod [options]'
summary     'compile for production'
description 'compile the proyect for test and send to system'

flag   :h, :help,  'show help for this awesome command' do |value, cmd|
  puts cmd.help
  exit 0
end

run do |opts, args, cmd|

  hexa  = String rand(0xffffffff).to_s(16)

  FileUtils::rm_rf 'nanoc.yaml'
  FileUtils::rm_rf 'output'
  FileUtils::rm_rf 'tmp'
  FileUtils::copy_entry 'nanoc-production.yaml', 'nanoc.yaml'
  File.open('nanoc.yaml', 'a') do |f|     f.write 'hexa: ' + hexa end
  
  system 'nanoc compile'
  system 'sh compress.sh'
  system 'nanoc renamefile ' +  hexa

  FileUtils::rm_rf 'nanoc.yaml'
  FileUtils::copy_entry 'nanoc-development.yaml', 'nanoc.yaml'
    
  puts "Files compiled :)"
  
end