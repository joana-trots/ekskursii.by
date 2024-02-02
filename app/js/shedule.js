dayjs.extend(window.dayjs_plugin_isToday);
dayjs.extend(window.dayjs_plugin_isTomorrow);
dayjs.extend(window.dayjs_plugin_isBetween);
dayjs.extend(window.dayjs_plugin_utc);

const panel_1 = document.querySelector('.panel-1 .schedule__wrapper-cards');
const panel_2 = document.querySelector('.panel-2 .schedule__wrapper-cards');
const panel_3 = document.querySelector('.panel-3 .schedule__wrapper-cards');

const cardData = [
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бренд Беларуси',

        date: '2024-02-06',

        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '4700',
        price_byn: '150',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бренд Беларуси',

        date: '2024-02-02',
        
        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        pprice_euro: '47',
        price_ru: '4700',
        price_byn: '150',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бревамвнд Беларуси',

        date: '2024-02-02',
        
        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бренд Беларуси',

        date: '2024-02-05',

        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бренд Беларуси',

        date: '2024-02-04',
        
        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бревамвнд Беларуси',

        date: '2024-02-03',
        
        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бренд Беларуси',

        date: '2024-02-05',

        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бренд Беларуси',

        date: '2024-02-03',
        
        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бревамвнд Беларуси',

        date: '2024-02-07',
        
        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бренд Беларуси',

        date: '2024-02-06',

        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бренд Беларуси',

        date: '2024-02-02',
        
        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бренд Беларуси',

        date: '2024-02-08',
        
        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    },
    {
        src: 'images/01.webp',
        seats: 'нет мест',
        title: 'БЕЛАЗ - Бренд Беларуси',

        date: '2024-02-08',
        
        start: '10:00',
        duration: '4 ч 30 мин',
        symbol_euro: ' €',
        symbol_rub: ' ₽',
        symbol_byn: ' BYN',
        price_euro: '47',
        price_ru: '47',
        price_byn: '47',
        price_kids_euro: '39',
        price_kids_ru: '39',
        price_kids_byn: '39',
        discount: 'Скидка 12% на экскурсии с отправлением по 25.11.2023 и оплате до 25.11.2023',
        addressLink: 'https://maps.app.goo.gl/WruWwwoDQ3f7eXnF8',
        address: 'Минск',
        description: 'В стоимость групповой экскурсии включено: <br>',
        aboutLink: '#',
        feedbackLink: '#'
    }
];

const errorMessage = document.createElement('h2');
errorMessage.className = 'h2';
errorMessage.textContent = ' Упс! Нет запланированных экскурсий';

const createCards = (data) => {

    const groupedByDateCards = {
        cardsToday: [],
        cardsTomorrow: [],
        cardsNextWeek: [],
    };

    data.forEach(item => {

        const cardItem = document.createElement('div');
        cardItem.className = 'schedule__card-item';

        /* IMAGE */

        const divImg = document.createElement('div');
        divImg.className = 'card-item__image';
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;

        const divOverlay = document.createElement('div');
        divOverlay.className = 'card-item__image--overlay';

        divImg.append(img, divOverlay);

        /* HEADER */

        const divHeader = document.createElement('div');
        divHeader.className = 'schedule__card-item--header';

        const divInfo2 = document.createElement('div');
        divInfo2.className ='card-item__info2';

        const divTitle = document.createElement('div');
        divTitle.className ='card-item__title';
        
        const h4 = document.createElement('h4');
        h4.className ='h4';
        const titleLink = document.createElement('a');
        titleLink.href = item.aboutLink;
        titleLink.textContent = item.title;

        h4.append(titleLink);
        divTitle.append(h4);
        
        const seats = document.createElement('div');
        seats.className ='card-item__seats';
        const parSeats = document.createElement('p');
        parSeats.textContent = item.seats;
        seats.append(parSeats);

        const divInfo = document.createElement('div');
        divInfo.className ='card-item__info';

        const divDate = document.createElement('div');
        divDate.className ='card-item__info--date';
        const parDate = document.createElement('p');
        parDate.textContent = dayjs(item.date).format('DD.MM.YYYY');
        const spanDate = document.createElement('span');
        /* ru */
        spanDate.textContent = '(' + dayjs(item.date).locale('ru').format('dd') + ')';
        
        /* be */
        // spanDate.textContent = '(' + dayjs(item.date).locale('be').format('dd') + ')'; 
        /* en */
        // spanDate.textContent = '(' + dayjs(item.date).format('dd') + ')';

        parDate.append(spanDate);
        divDate.append(parDate);
        
        const divTime = document.createElement('div');
        divTime.className ='card-item__info--time';
        const parTime = document.createElement('p');
        parTime.textContent = item.start;
        divTime.append(parTime);

        const divDuration = document.createElement('div');
        divDuration.className ='card-item__info--duration';
        const parDur = document.createElement('p');
        parDur.textContent = item.duration;
        divDuration.append(parDur);

        divInfo2.append(divTitle, seats);
        divInfo.append(divDate, divTime, divDuration);
        divHeader.append(divInfo2, divInfo);


        /* PRICE */

        const divPrice = document.createElement('div');
        divPrice.className ='card-item__price';
        const parPrice = document.createElement('p');
        parPrice.textContent = item.price_byn + item.symbol_byn;
        const spanPrice = document.createElement('span');
        spanPrice.textContent = 'за человека';
        parPrice.append(spanPrice);
        divPrice.append(parPrice);


        /* DROPDOWN BTN */

        const dropdownBtn = document.createElement('div');
        dropdownBtn.className ='card-item__dropdown-btn btn cta-secondary';
        const checkBtn = document.createElement('input');
        checkBtn.type = 'checkbox';
        checkBtn.checked = true;
        dropdownBtn.append(checkBtn);

        /* DROPDOWN INFO */

        const dropdownInfo = document.createElement('div');
        dropdownInfo.className ='card-item__dropdown-info';
        
        const moreDates = document.createElement('div');
        moreDates.className ='card-item__more-dates-btn simple-btn btn';
        const moreDatesLink = document.createElement('a');
        moreDatesLink.href = '#';
        moreDatesLink.textContent = 'Другие даты';
        moreDates.append(moreDatesLink);

        const discount = document.createElement('div');
        discount.className ='card-item__discount';
        const parDiscount = document.createElement('p');
        parDiscount.textContent = item.discount;
        discount.append(parDiscount);

        const additionalInfo = document.createElement('div');
        additionalInfo.className ='card-item__additional-info';

        const pickupPoint = document.createElement('div');
        pickupPoint.className ='card-item__additional-info--pickup-point';
        const parAddress = document.createElement('p');
        parAddress.textContent = 'Выезд: '
        const linkAddress = document.createElement('a');
        linkAddress.textContent = item.address;
        linkAddress.href = item.addressLink;
        pickupPoint.append(parAddress);
        parAddress.append(linkAddress);

        const divKidsPrice = document.createElement('div');
        divKidsPrice.className ='card-item__additional-info--kids-price';
        const parKidsPrice = document.createElement('p');
        parKidsPrice.textContent = 'Цена для детей до 18 лет: ';
        const spanKidsPrice = document.createElement('span');
        spanKidsPrice.textContent = item.price_kids_byn + item.symbol_byn;
        parKidsPrice.append(spanKidsPrice);
        divKidsPrice.append(parKidsPrice);

        const divSeats = document.createElement('div');
        divSeats.className ='card-item__additional-info--seats';
        const parSeatsInfo = document.createElement('p');
        parSeatsInfo.textContent = 'Места: ';
        const spanSeats = document.createElement('span');
        spanSeats.textContent = item.seats;
        parSeatsInfo.append(spanSeats);
        divSeats.append(parSeatsInfo);

        additionalInfo.append(pickupPoint, divKidsPrice, divSeats);

        const cardDescription = document.createElement('div');
        cardDescription.className ='card-item__description';
        const descriptionTitle = document.createElement('p');
        descriptionTitle.className ='card-item__description--title';
        descriptionTitle.textContent = 'В стоимость групповой экскурсии включено:'
        cardDescription.append(descriptionTitle);

        const cardButtons = document.createElement('div');
        cardButtons.className ='card-item__buttons';

        const descriptionBtn = document.createElement('div');
        descriptionBtn.className ='card-item__description-btn simple-btn btn';
        const descriptionBtnLink = document.createElement('a');
        descriptionBtnLink.textContent = 'Описание экскурсии';
        descriptionBtnLink.href = item.aboutLink;
        descriptionBtn.append(descriptionBtnLink);

        const feedbackBtn = document.createElement('div');
        feedbackBtn.className ='card-item__feedback-btn simple-btn btn';
        const feedbacBtnLink = document.createElement('a');
        feedbacBtnLink.textContent = 'Отзывы';
        feedbacBtnLink.href = item.feedbackLink;
        feedbackBtn.append(feedbacBtnLink);

        cardButtons.append(descriptionBtn, feedbackBtn);

        dropdownInfo.append(moreDates, discount, additionalInfo, cardDescription, cardButtons);


        /* SUBMIT BTN */

        const bookBtn = document.createElement('a');
        bookBtn.className = 'card-item__cta btn';
        bookBtn.href = '#';
        bookBtn.title = 'Забронировать';
       
        cardItem.append(divImg, divHeader, divPrice, dropdownBtn, dropdownInfo, bookBtn);

        // cards.push(cardItem);
        const date = item.date;
        groupedByDateCards.cardsToday.push(...(dayjs(date).isToday() ? [cardItem.cloneNode(true)] : []));
        groupedByDateCards.cardsTomorrow.push(...(dayjs(date).isTomorrow() ? [cardItem.cloneNode(true)] : []));
        groupedByDateCards.cardsNextWeek.push(...(dayjs(date).isBetween(dayjs(), dayjs().add(7, 'day'), 'day', '[]') ? [cardItem.cloneNode(true)] : []));
    });

    return groupedByDateCards;
};

cardData.sort((a, b) => dayjs(a.date) - dayjs(b.date));

const createdCards = createCards(cardData);

panel_1.append(...(createdCards.cardsNextWeek.length ? createdCards.cardsNextWeek : [errorMessage.cloneNode(true)]));
panel_2.append(...(createdCards.cardsToday.length ? createdCards.cardsToday : [errorMessage.cloneNode(true)]));
panel_3.append(...(createdCards.cardsTomorrow.length ? createdCards.cardsTomorrow : [errorMessage.cloneNode(true)]));