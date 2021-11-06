
//CONFIGURAÇÕES DOS PARAMENTRO DE VALIDAÇÃO DO FORMULÁRIO
$('#form').validate({
    rules: {
        edtimagems: {
            required: true,
            file: true,
        },
        agree: "required"
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});
//MAPEAMOS O BOTÃO DE SALVAR
const btn = document.querySelector("#btnsalvar");
//MONITORAMOS O EVENTO DE CLICK DO BOTÃO SALVAR
btn.addEventListener("click", (e) => {
    //RECEBEMOS O RESULTADO DA VALIDAÇÃO DO FORMULARIO
    let valida = $('#form').valid();
    //VERICAMOS SE O FORM ESTA COM OS DADOS VALIDOS
    if (valida == true) {
        alert("Valido!");
    }
});

$(document).ready(function () {
    //ADICIONA A MASCARA DO CFP OU DO CNPJ
    $("#cnpj").inputmask({
        mask: ['999.999.999-99', '99.999.999/9999-99'],
        keepStatic: true
    });
    //ADICIONA A MASCARA DO CFP OU DO CNPJ
    $("#data_inicio_atividade").inputmask({
        mask: ['99/99/9999'],
    });
    //IMPLEMENTAMOS O PLUGIN DE DATA
    $('#data_inicio_atividade').datepicker({
        language: "pt-BR",
        autoclose: true
    });
});