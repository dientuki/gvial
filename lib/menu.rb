def get_menu

	menus = Array.new

	menus << {:title =>'Quienes somos',
      		  :href => 'quienes-somos'}

	menus << {:title =>'Productos & servicios',
		  :href => 'productos-servicios'}
		  
  menus << {:title =>'Capacidad Operativa',
      :href => 'capacidad-operativa'}
 
  menus << {:title =>'Experiencia',
      :href => 'experiencia'}
      
  menus << {:title =>'Contactenos',
      :href => 'contactenos'}

	return menus

end

def get_workUs

	wus = Array.new

	wus << {:title =>'Patagonia Argentina',
     		  :w => '192'}

	wus << {:title =>'Norte Argentina',
     		  :w => '113'}

  wus << {:title =>'Cordoba',
     		  :w => '123'}

	wus << {:title =>'Turismo Buenos Aires',
     		  :w => '110'}

  wus << {:title =>'Cuyo Argentina',
     		  :w => '113'}

	wus << {:title =>'Litoral Argentina',
     		  :w => '137'}

  return wus
end
