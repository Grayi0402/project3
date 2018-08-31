import { AbstractControl } from '@angular/forms'

export function nameValidate(control: AbstractControl) {
	if (control && (control.value != null || control.value != undefined)) {

		const regex = new RegExp('^([a-zA-Z])[a-zA-Z ]+');
		if (!regex.test(control.value)) {
			return { isError: true }
		}
	}
	return null;
}
//chua sd
export function dateValidate(control: AbstractControl) {
	if (control && (control.value != null || control.value != undefined)) {

		const regex = new RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
		if (!regex.test(control.value)) {
			return { isError: true }
		}
	}
	return null;
}

export function phoneValidate(control: AbstractControl) {
	if (control && (control.value != null || control.value != undefined)) {

		const regex = new RegExp('^[0-9]{10,11}$');
		if (!regex.test(control.value)) {
			return { isError: true }
		}
	}
	return null;
}

export function passportNumberValidate(control: AbstractControl) {
	if (control && (control.value != null || control.value != undefined)) {

		const regex1 = new RegExp('^[0-9]{9}$');
		const regex2 = new RegExp('^[0-9]{12}$');
		if ((!regex1.test(control.value))
			&& (!regex2.test(control.value))) {
			return { isError: true }
		}
	}
	return null;
}

export function emailValidate(control: AbstractControl) {
	if (control && (control.value != null || control.value != undefined)) {

		const regex = new RegExp(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/);
		if(!regex.test(control.value)){
			return {isError: true}
		}
	}
	return null
}

export function atmNumberValidate(control: AbstractControl){
	if (control && (control.value != null || control.value != undefined)) {

		const regex = new RegExp('^[0-9A-Z]{9,14}$');
		if (!regex.test(control.value)) {
			return { isError: true }
		}
	}
	return null;
}