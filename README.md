# mascara-tel
Máscara de telefone - fixo e móvel - vanilla JS
Por Henrique, L.

Simples máscara feita apenas em vanilla Javascript para campo de telefone em formulários;

Permite digitar apenas números e adiciona automaticamente os parênteses e hífen necessários. Formato: (99)9999-9999 ou (99)99999-9999;

Feito para funcionar em desktop e mobile;

Demonstração https://apilogik.github.io/mascara-tel/

----------Instruções-------------

Exemplos de como utilizar:

Formulário HTML com input type'tel' para o telefone:

--------------------------------------------------------------------------------------------------------------------------------------------
   	<form method="POST">
			<input type="tel" id="input-tel" maxlength="14" minlength="13" placeholder="(__)____-____" required title="Deve digitar apenas números.">
			<label for="input-tel">*Somente números</label>
			<input type="submit" id="btn-send" value="Enviar">
			<p><!--conteúdo dinâmico - Resultado--></p>
		</form>
---------------------------------------------------------------------------------------------------------------------------------------------

No script principal - main.js - importar o módulo Mask e criar novo objeto mandando como parâmatro o DOM Object do campo de formulário desejado, que 
será processado pelo módulo (phonemask.js);
Também bloqueia-se a opção de colar para forçar a digitação.

--------------------------------------------------------------------------------------------------------------------------------------------
	   import Mask from '../../modules/phonemask.js';
	    
	   [...]
	   const inputTel = document.querySelector('#input-tel');
	    
	   const phoneMask = new Mask(inputTel);
     phoneMask.mask();

	   //Evitar copiar e colar do número completo
	   inputCpf.addEventListener('paste', event => event.preventDefault());
--------------------------------------------------------------------------------------------------------------------------------------------
