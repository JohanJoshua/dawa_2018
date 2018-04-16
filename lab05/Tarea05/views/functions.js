$(document).ready(()=>{
					$('#hidding').hide();
					$('#type').click(()=>{
						var temp = $('#type option:selected').val(),
						insert;
					$.get('/createAjax',{_id:temp},(data)=>{
					$.each(data,(index, item)=>{
						insert +='<option>'+item.nombre+'</option>';
						});
						$('#temp').html(insert);
						$('#hidding').show();
						});
					});

					$('#addSub').click(()=>{
						$('#labelSub').append("<input class='form-control' type='text' name='subcategorias'/>");
					});
				});