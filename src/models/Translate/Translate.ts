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
	ImInWorkPlace,
	allPlaces,
	technicalWork,
	apologize,
	tryAgain,
	subscriptionActivated,
	subscriptionNotActivated,
	expirationDate,
	showQrSuggestion,
	gotoAllWorkPlaces,
	dayNMonth,
	whatClientPicked,
	tea,
	coffee,
	subscribeVerb,
	subscribeNoun,
	pay,
	badEmailOrPassword,
	networkError,
}

const texts = {
	[Phrase.networkError]: {
		ru: () => 'Упс о_0, ошибка сети'
	},
	[Phrase.pay]: {
		ru: () => 'Неверный логин или пароль, попробуйте снова'
	},
	[Phrase.pay]: {
		ru: () => 'Оплатить'
	},
	[Phrase.subscribeNoun]: {
		ru: () => 'подписки'
	},
	[Phrase.subscribeVerb]: {
		ru: () => 'Оформление'
	},
	[Phrase.tea]: {
		ru: () => 'Чай'
	},
	[Phrase.coffee]: {
		ru: () => 'Кофе'
	},
	[Phrase.whatClientPicked]: {
		ru: () => 'Что взял клиент?'
	},
	[Phrase.dayNMonth]: {
		ru: ({day, month}: any) => {
			const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
			return `${day || ''} ${months[month] || ''}`;
		},
	},
	[Phrase.gotoAllWorkPlaces]: {
		ru: () => 'Ко всем заведениям',
	},
	[Phrase.expirationDate]: {
		ru: () => 'Дата истечения: ',
	},
	[Phrase.subscriptionNotActivated]: {
		ru: () => 'Подписка не активирована',
	},
	[Phrase.showQrSuggestion]: {
		ru: () => 'Предъявите этот код бариста' + // бариста -- не склоняется
			' и получайте' +
			'бесплатный чай, скидки в кафе и' +
			'неограниченный доступ в рабочие пространства',
	},
	[Phrase.subscriptionNotActivated]: {
		ru: () => 'Подписка не активирована',
	},
	[Phrase.subscriptionActivated]: {
		ru: () => 'Подписка активирована',
	},
	[Phrase.tryAgain]: {
		ru: () => 'Попробовать заново',
	},
	[Phrase.apologize]: {
		ru: () => 'Приносим свои извенения.',
	},
	[Phrase.technicalWork]: {
		ru: () => 'Технические работы',
	},
	[Phrase.allPlaces]: {
		ru: () => 'Все заведения',
	},
	[Phrase.ImInWorkPlace]: {
		ru: () => 'Я в кофейне',
	},
	[Phrase.name]: {
		ru: () => 'Имя',
	},
	[Phrase.password]: {
		ru: () => 'Пароль',
	},
	[Phrase.email]: {
		ru: () => 'Почта',
	},
	[Phrase.inputName]: {
		ru: () => 'Введите свое имя',
	},
	[Phrase.inputEmail]: {
		ru: () => 'Введите свою почту',
	},
	[Phrase.inputPassword]: {
		ru: () => 'Введите пароль',
	},
	[Phrase.contactUs]: {
		ru: () => 'Свяжитесь с нами',
	},
	[Phrase.slogan1]: {
		ru: () => 'Сделайте город своим офисом!',
	},
	[Phrase.slogan2]: {
		ru: () => 'Превращаем кафе и музеи вашего ' +
			'города в настоящие рабочие пространства!',
	},
	[Phrase.register]: {
		ru: () => 'Регистрация',
	},
	[Phrase.login]: {
		ru: () => 'Вход',
	},
	[Phrase.loginAction]: {
		ru: () => 'Войти',
	},
	[Phrase.registerAction]: {
		ru: () => 'Зарегестрироваться',
	},
	[Phrase.noAccount]: {
		ru: () => 'Нет аккаунта?',
	},
};


function getPhrase(phrase: Phrase, context?: Record<string, unknown>): string {
	return texts[phrase].ru(context);
}

export default getPhrase;