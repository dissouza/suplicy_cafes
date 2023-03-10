var v_uf = [
			{ Id_uf: 1, Estado: "Distrito Federal" },
			{ Id_uf: 2, Estado: "São Paulo" },
			{ Id_uf: 3, Estado: "Rio de Janeiro" },			
		];
					
					
//Array de Cidades 
var v_cidades = [
	{ IdEstado: 1, Id_cid: 1, Cidade: "Brasília"},
	{ IdEstado: 2, Id_cid: 2, Cidade: "Campinas" },
	{ IdEstado: 2, Id_cid: 3, Cidade: "São Paulo" },
	{ IdEstado: 3, Id_cid: 4, Cidade: "Rio de Janeiro" },			
	{ IdEstado: 2, Id_cid: 5, Cidade: "Guarulhos" },
	{ IdEstado: 2, Id_cid: 6, Cidade: "Barueri" },
	];

					
//Array de Lojas 
var v_lojas = [
	{ IdCidade: 1, Id_loja: 1, 
		Loja: "Shopping Iguatemi Brasília", 
		Endereco: "​​​​​​​Piso Semi Enterado - Shin CA 4 - Lote A - Lago Norte -Shopping Iguatemi Brasília - Ponto 10 - Brasília / DF",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7681.217265617071!2d-47.88932833161649!3d-15.718909802214414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a309b1e108ff5%3A0xdd62e955fb5d88ce!2sIguatemi+Brasilia!5e0!3m2!1spt-BR!2sbr!4v1495064954942" 
	},
		
	{ IdCidade: 3, Id_loja: 2,  
		Loja: "D&D", 
		Endereco: "Avenida das Naçôes Unidas, 12551/12559 - Nº 12.555- Quiosque: 13 Nível 5.95 - Térreo - Brooklin Paulista - São Paulo, SP – CEP: 04578-903 - Tel:(11) 3043-6249",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.9390520815687!2d-46.697495254726434!3d-23.60870420607483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57330897b75b%3A0x32b6041ab5dc9936!2sAv.+das+Na%C3%A7%C3%B5es+Unidas%2C+12551+-+Pinheiros%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1495065093686"
	},			
	
	{ IdCidade: 5, Id_loja: 3, 
		Loja: "GRU Airport",    
		Endereco: "TPS 3 – Loja 58B Rodovia Hélio Schmidt, s/nº CEP 07190-100, Guarulhos, SP - Telefone: (11) 2445-7861", 
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14642.909266387109!2d-46.48558066093598!3d-23.434215508682694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI2JzA1LjMiUyA0NsKwMjgnNDIuOCJX!5e0!3m2!1spt-BR!2sbr!4v1495065398676"
	},

	{ IdCidade: 3, Id_loja: 5, 
		Loja: "Jardins",
		Endereco: "Alameda Lorena, 1430 - Jardins - São Paulo / SP",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.2790654352456!2d-46.66554549947307!3d-23.564267567408205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d14fc6d8af%3A0x5de0f12999f789b1!2sAlameda+Lorena%2C+1430+-+Jardim+Paulista%2C+S%C3%A3o+Paulo+-+SP%2C+01424-001!5e0!3m2!1spt-BR!2sbr!4v1495065485436"
	},
	
	{ IdCidade: 3, Id_loja: 5, 
		Loja: "Loja Gomes de Carvalho",
		Endereco: "Vila Olímpia - São Paulo/SP - Rua Gomes de Carvalho, 1146 - Térreo - Vila Olímpia - São Paulo/SP - CEP 04547-004",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.048512771552!2d-46.68456901924818!3d-23.597372582256813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574ebf54e4f5%3A0x9067bda44ef42764!2sVN+Gomes+de+Carvalho!5e0!3m2!1spt-BR!2sbr!4v1495065570348" 
	},
	
	{ IdCidade: 3, Id_loja: 5, 
		Loja: "LWM Corporate Center",
		Endereco: "Rua George Ohm, 230 - Cidade Monções, São Paulo - SP CEP 04576-020 Piso Térreo - Rua George Ohm, 230 - Cidade Monções, São Paulo - SP, 04576-020 - Telefone : (11) 5102- 4476",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.9440695490607!2d-46.69394426019197!3d-23.612355162344983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50c94331487f%3A0xd3c7965264b1e79a!2sRua+George+Ohm%2C+230+-+Cidade+Mon%C3%A7%C3%B5es%2C+S%C3%A3o+Paulo+-+SP%2C+04576-020!5e0!3m2!1spt-BR!2sbr!4v1495065649195"
	},
	
	{ IdCidade: 3, Id_loja: 5, 
		Loja: "MASP",
		Endereco: "Avenida Paulista, 1.578- Sub solo, Quiosque - MASP - Bela Vista - São Paulo, SP – CEP: 01310-200 - Telefone: (11) 98555-8583",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.2996087866344!2d-46.65659233151712!3d-23.561315623240368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQwLjgiUyA0NsKwMzknMjIuMyJX!5e0!3m2!1spt-BR!2sbr!4v1495065777731" 
	},
	
	{ IdCidade: 3, Id_loja: 5, 
		Loja: "Shopping Iguatemi",
		Endereco: "Piso Térreo - Avenida Brig. Faria Lima, 2.232 Shopping Iguatemi - Pinheiros - São Paulo / SP - Telefone: (11) 3814-8696",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7657778280554!2d-46.68968296961429!3d-23.576854210987364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad92aa2aa72ed0b1!2sSuplicy!5e0!3m2!1spt-BR!2sbr!4v1495066080339" 
	},
	
	{ IdCidade: 6, Id_loja: 1, 
		Loja: "Shopping Iguatemi Alphaville",
		Endereco: "Piso Xingu - Al. Rio Negro, 111, Quadra 210 - Shopping Iguatemi Alphaville - Barueri - São Paulo / SP - Telefone: (11) 3081-5893",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1829.3894463698634!2d-46.849111763210026!3d-23.504472265829033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x989053e167c9d687!2sCVC+Shopping+Iguatemi+Alphaville!5e0!3m2!1spt-BR!2sbr!4v1495066494570" 
	},
	
	{ IdCidade: 3, Id_loja: 5, 
		Loja: "Shopping Iguatemi Campinas",
		Endereco: "Av. Iguatemi, 777 - 777 - QUIOSQUE Q215; Piso 2 - CEP 13092-902 - Vila Brandina - Telefone: (19) 3727-9090",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7351.19939240746!2d-47.030032919801116!3d-22.8912413514919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzMxLjIiUyA0N8KwMDEnMzcuOCJX!5e0!3m2!1spt-BR!2sbr!4v1495066372296" 
	},
	
	{ IdCidade: 3, Id_loja: 5, 
		Loja: "Shopping Market Place",
		Endereco: "Avenida Doutor Chucri Zaidan, 902 - Lojas Q; Pavimento; Terreo - Vila Cordeiro - São Paulo, SP CEP: 04583-110 - Telefone: (11) 5181-2981",			
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.7592238157793!2d-46.700491281181016!3d-23.6215972634859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM3JzE4LjMiUyA0NsKwNDEnNTkuMyJX!5e0!3m2!1spt-BR!2sbr!4v1495066701688" 
	},

	{ IdCidade: 2, Id_loja: 5, 
		Loja: "Viracopos",
		Endereco: "Rodovia Santos Dumont, km 66. - Parque Viracopos, Campinas - SP 13052-901 - Desembarque Internacional",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.381987369531!2d-47.141754376242346!3d-23.00974274304974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzM1LjYiUyA0N8KwMDgnMjUuNSJX!5e0!3m2!1spt-BR!2sbr!4v1495066843399" 
	},
	
	{ IdCidade: 4, Id_loja: 6,  
		Loja: "Aeroporto Internacional Galeão", 
		Endereco: "Ilha do Governador - Avenida vinte de janeiro s/n, Mezzanino Público. Terminal 2 - Piso 1",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7355.524451240872!2d-43.252882915057924!3d-22.811272787970932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ4JzQyLjUiUyA0M8KwMTQnNTYuOCJX!5e0!3m2!1spt-BR!2sbr!4v1495066997440" 
	},
	
	{ IdCidade: 4, Id_loja: 6,  
		Loja: "Barra Shopping", 
		Endereco: "Av. das Américas, 4666 Loja 106-P/27-D – Nível Lagoa/ Expansão – Barra da Tijuca - Telefone: (21) 3387-0692/0558",				
		Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.673839960478!2d-43.36647573228807!3d-22.99921598496488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU5JzU3LjIiUyA0M8KwMjEnMjcuOCJX!5e0!3m2!1spt-BR!2sbr!4v1495067214127" 
	},			
	]