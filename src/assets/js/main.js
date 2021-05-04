import Mask from '../../modules/phonemask.js';

//-----------Funções principais----------------
const loadForm = () => {
	const inputTel = document.querySelector('#input-tel');
	
	const loadMask = () => {
		//Novo objeto Mask - parâmetro: o campo p/ tel do formulário;
		const phoneMask = new Mask(inputTel);
		phoneMask.mask();
	}

	const showMsg = e => {
		document.querySelector('form p').innerHTML = '';
		document.querySelector('form p').innerHTML = 'O número está no formato aceito.';
		e.preventDefault();
	}

	document.querySelector('form').addEventListener('submit', e => showMsg(e));

	inputTel.addEventListener('paste', event => event.preventDefault());

	loadMask();
	
}//loadForm

loadForm();