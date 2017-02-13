# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

require 'json'

def get_hash(file)

  return file

  tmp = File.read('output/manifest.json')
  data_hash = JSON.parse(tmp)

  data_hash.each do |child|
    if (child["path"] == file)
      return child["hashedPath"]
    end
  end

end

include Nanoc::Helpers::Rendering
include Nanoc::Helpers::LinkTo