export enum Phrase {
	contactUs,
	contactEmail,
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
	waitingPayTitle,
	waitingPay,
	returnToPay,
	getSubscription,
	aboutSubscribe,
	badEmailOrPassword,
	networkError,
	userExists,
	haveAccount,
	confirmPassword,
	inputConfirmPassword,
}

const texts = {
	[Phrase.inputConfirmPassword]: {
		ru: () => 'Введите пароль ещё раз',
	},
	[Phrase.confirmPassword]: {
		ru: () => 'Повторите пароль',
	},
	[Phrase.haveAccount]: {
		ru: () => 'Есть аккаунт?',
	},
	[Phrase.userExists]: {
		ru: () => 'Пользователь с такой почтой уже существует, не вы ли это?',
	},
	[Phrase.badEmailOrPassword]: {
		ru: () => 'Неверный логин или пароль, попробуйте снова',
	},
	[Phrase.networkError]: {
		ru: () => 'Упс о_0, ошибка сети'
	},
	[Phrase.pay]: {
		ru: () => 'Оплатить'
	},
	[Phrase.waitingPayTitle]:{
		ru: () => 'Ожидание оплаты'
	},
	[Phrase.waitingPay]: {
		ru: () => ' Если у Вас возникли проблемы во время оплаты,' +
			' напишите нам. Если платеж не был завешен - вы можете перейти к оплате'
	},
	[Phrase.getSubscription]: {
		ru: () => 'Оформить подписку'
	},
	[Phrase.aboutSubscribe]: {
		ru: () => 'Продолжить'
	},
	[Phrase.returnToPay]: {
		ru: () => 'Вернуться к оплате'
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
			' бесплатный чай, скидки в кафе и' +
			' неограниченный доступ в рабочие пространства',
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
		ru: () => 'Приносим свои извинения.',
	},
	[Phrase.technicalWork]: {
		ru: () => 'Технические работы',
	},
	[Phrase.allPlaces]: {
		ru: () => 'Все заведения',
	},
	[Phrase.ImInWorkPlace]: {
		// ru: () => 'Я в кофейне',
		ru: () => 'Моя подписка',
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
	[Phrase.contactEmail]: {
		ru: () => 'Для связи: ',
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
		ru: () => 'Зарегистрироваться',
	},
	[Phrase.noAccount]: {
		ru: () => 'Нет аккаунта?',
	},
};


function getPhrase(phrase: Phrase, context?: Record<string, unknown>): string {
	return texts[phrase].ru(context);
}

export default getPhrase;