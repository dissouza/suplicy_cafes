function carregaEstadoCidade()	{	
        $(document).ready(function () {
            //Percorre o array de categorias para popular o combo de categorias
            $.each(v_uf, function (i, categoria) {
                //Faz o append (adiciona) cada um dos itens do array como options do select de id combo1
                $("#uf").append($('<option>', {
                    //neste caso o value do option vai ser a pripriedade Id (é case sensitive, então cuide da nomenclatura)
                    value: categoria.Id_uf,
                    //no text estou usando a propriedade Categoria dos objetos dentro do array categoria (case sensitive também)
                    text: categoria.Estado
                }))
            })			
			
            //Vai ser acionado cada vez que o UF do item selecionado
            $("#uf").change(function () {
                //Pegando o novo valor selecionado no combo
                var categoria = $(this).val()
				carregaCombo2(categoria);				
            })
			
			
			//Quando clicar sobre cidade carrega as mudanças
			$("#cidade").change(function () { 									
				$("#loja").empty()
				$("#mapa").empty()
				var categoria = $(this).val()
				carregaCombo3(categoria);				
            })
        })	
}

function carregaCombo2(categoria) {
    //Fazer um filtro dentro do array de categorias com base no Id do Estadp selecionado no combo1
    var subCategoriasFiltradas = $.grep(v_cidades, function (e) { return e.IdEstado == categoria; });
			
    //Faz o append (adiciona) cada um dos itens do array filtrado no combo2
    $("#cidade").html('<option>Selecione</option>');
    $.each(subCategoriasFiltradas, function (i, subcategoria) {
        $("#cidade").append($('<option>', {
            value: subcategoria.Id_cid, //Id do objeto subcategoria
            text: subcategoria.Cidade //Nome da Subcategoria				
		}))															
    })			
}

function carregaCombo3 (categoria){
			
	var subCategoriasFiltradas = $.grep(v_lojas, function (e) { return e.IdCidade == categoria; });
			
	$.each(subCategoriasFiltradas, function (i, subcategoria){
		$("#loja").append($('<strong>',{text: subcategoria.Loja}))  //Nome da Loja
		$("#loja").append('<br />')
		// $("#loja").append("<img src='" + subcategoria.Img + "' width='100%'>") 
		// $("#loja").append('<br />')			
		$("#loja").append($('<span>',{text: subcategoria.Endereco})) //Endereço da Loja
		$("#loja").append('<br />')
		if (i==0){
			$("#mapa").append("<iframe src='" + subcategoria.Mapa + "' id='iframemap' name='areamapa' width='100%' height='450px' frameborder=0></iframe>")	
		}						
		$("#loja").append("<a href='" + subcategoria.Mapa + "'target='areamapa'>Veja o mapa</a>")				
		$("#loja").append('<br /><br /><br />')
	})

}
		