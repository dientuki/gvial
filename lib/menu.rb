def get_menu

	menus = Array.new

	menus << {:title =>'Quienes somos',
						:text =>'<span>Quienes</span> <span>somos</span>',
      		  :href => 'quienes-somos'}

	menus << {:title =>'Productos & servicios',
	:text =>'<span>Productos</span> <span>& servicios</span>',
		  :href => 'productos-servicios'}
		  
  menus << {:title =>'Capacidad Operativa',
  :text =>'<span>Capacidad</span> <span>Operativa</span>',
      :href => 'capacidad-operativa'}
 
  menus << {:title =>'Experiencia',
  :text =>'Experiencia',
      :href => 'experiencia'}
      
  menus << {:title =>'Contactenos',
  :text =>'Contactenos',
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
