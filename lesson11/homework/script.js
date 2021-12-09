// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let formGlobal = document.createElement('form');
// formGlobal.id = 'formInp';
// formGlobal.action = '';
// formGlobal.name = 'formGl';
// document.body.appendChild(formGlobal);
//
// let inputText = document.createElement('input');
// inputText.type = 'text';
// inputText.name = 'inpText';
// inputText.placeholder = 'give name';
// formGlobal.appendChild(inputText);
//
// let inputNum = document.createElement('input');
// inputNum.type = 'number';
// inputNum.name = 'inpNumber';
// inputNum.placeholder = 'give age';
// formGlobal.appendChild(inputNum);
//
// let btn = document.createElement('button');
// btn.innerHTML = 'click';
// formGlobal.appendChild(btn);
//
// let formG = document.forms.formInp;
//
//
// btn.addEventListener('click', function () {
//     let arr = {};
//     arr.name = formG.inpText.value;
//     arr.age = formG.inpNumber.value;
// localStorage.setItem('one', JSON.stringify(arr));
// })


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


// let formGlobal = document.createElement('form')
// formGlobal.id = 'formInp';
// formGlobal.action = '';
// formGlobal.name = 'formGl';
// document.body.appendChild(formGlobal);
//
// let inputModel = document.createElement('input');
// inputModel.type = 'text';
// inputModel.name = 'inpModel';
// inputModel.placeholder = 'give model';
// formGlobal.appendChild(inputModel);
//
// let inputType = document.createElement('input');
// inputType.type = 'text';
// inputType.name = 'inpType';
// inputType.placeholder = 'give type';
// formGlobal.appendChild(inputType);
//
// let inputVolume = document.createElement('input');
// inputVolume.type = 'text';
// inputVolume.name = 'inpVolume';
// inputVolume.placeholder = 'give volume';
// formGlobal.appendChild(inputVolume);
//
// let btn = document.createElement('button');
// btn.innerHTML = 'click';
// document.body.appendChild(btn);
//
// let formG = document.forms.formInp;
//
// btn.onclick = e => {
//     e.preventDefault();
//     let obj = {
//         model: formG.inpModel.value,
//         type: formG.inpType.value,
//         volune: formG.inpVolume.value,
//     }
//
//     let arr = JSON.parse(localStorage.getItem('keyCar')) || [];
//     arr.push(obj);
//     localStorage.setItem('keyCar', JSON.stringify(arr));
// }

