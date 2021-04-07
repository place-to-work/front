import T from 'i18n-react';

export enum Phrase {
	contactUs,
	slogan1,
	slogan2,
	register,
	login,
	loginAction,
	registerAction,
	noAccount,
	inputName,
	inputEmail,
	inputPassword,
	email,
	password,
	name,
}

T.setTexts({
	[Phrase.name]: {
		ru: 'Имя',
	},
	[Phrase.password]: {
		ru: 'Пароль',
	},
	[Phrase.email]: {
		ru: 'Почта',
	},
	[Phrase.inputName]: {
		ru: 'Введите свое имя',
	},
	[Phrase.inputEmail]: {
		ru: 'Введите свою почту',
	},
	[Phrase.inputPassword]: {
		ru: 'Введите пароль'
	},
	[Phrase.contactUs]: {
		ru: 'Свяжитесь с нами',
	},
	[Phrase.slogan1]: {
		ru: 'Сделайте город своим офисом!',
	},
	[Phrase.slogan2]: {
		ru: 'Превращаем кафе и музеи вашего ' +
			'города в настоящие рабочие пространства!'
	},
	[Phrase.register]: {
		ru: 'Регистрация',
	},
	[Phrase.login]: {
		ru: 'Вход',
	},
	[Phrase.loginAction]: {
		ru: 'Войти',
	},
	[Phrase.registerAction]: {
		ru: 'Зарегестрироваться',
	},
	[Phrase.noAccount]: {
		ru: 'Нет аккаунта?',
	},

	auth: {
		ru: '',
	},
	base: {},
	cafe: {},
	cafeList: {},
	inPlace: {},
	signup: {},
	staff: {},
	subscribe: {},
	subscription: {},
});

enum Lang {
	ru = 'ru',
}

class Translate {
	constructor(protected language: Lang) {}
	phrase(phrase: Phrase): string {
		return T.texts[`${phrase}`][`${this.language}`];
	}
}

const vocab = new Translate(Lang.ru);

function getPhrase(ph: Phrase): string {
	return vocab.phrase(ph);
}

export default getPhrase;