usage       'prod [options]'
summary     'compile the proyect'
description 'compile the proyect for test and send to system'

flag   :h, :help,  'show help for this awesome command' do |value, cmd|
  puts cmd.help
  exit 0
end


run do |opts, args, cmd|
  rand = String args[0]
  puts "Renaming css and js files " + rand

  files = ['css/atyca-min.css',
           'js/atyca-min.js']

  files.each do |file|
    Dir.glob('output/' + file).sort.each do |f|
      filename = File.basename(f, File.extname(f))
      filedir = File.dirname(f)
      File.rename(f,filedir +'/'+ filename.sub('-min','-' + rand + '-min')+ File.extname(f))
    end
  end

  puts "Renamed successfully completed!!!!!"

end
