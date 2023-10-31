import Image from 'next/image';
import Link from 'next/link';
import ru from '../public/RU.png';
import chevronDownGray from '../public/chevron.down.gray.png';
import arrow from '../public/arrow.png';
import telegram from '../public/telegram.png';
import clipboard from '../public/clipboard.png';
import bg from '../public/bg.png';
import city from '../public/city.png';
import iPhone from '../public/iPhone.png';
import vectorTg from '../public/vectorTg.png';
import chevron from '../public/chevron.png';

export default function Home() {
    return (
        <div className="landing">
            <header className="header">
                <div className="header__block">
                    <div className="header__imgFlag">
                        <Image src={ru} alt="flag" />
                        <Image
                            src={chevronDownGray}
                            alt="chevronDownGray"
                            className="link"
                        />
                    </div>
                    <div className="header__tg">
                        <Image src={telegram} alt="telegram" />
                        <Link href="https://t.me/Frowning_Cat">
                            <text className="link">Чат поддержки</text>
                        </Link>
                    </div>
                    <div className="header__enterText link">
                        <text>Вход</text>
                    </div>
                </div>
                <div className="header__button link">
                    <text>Подать заявление</text>
                </div>
            </header>
            <main className="main">
                <div className="main__topDiv">
                    <div className="main__topBlok">
                        <div className="main__typeOfQuestionnaire">
                            <div className="main__Clipboard">
                                <Image src={clipboard} alt="clipboard" />
                            </div>
                            <text> Анкета DS-160</text>
                        </div>
                        <div className="main__topBlokTitle">
                            Получите{' '}
                            <text className="additionalColor">визу США</text> в
                            срок от 1 дня
                        </div>
                        <div className="main__topBlokText">
                            Разработанный ИИ-алгоритм ускорения записи и удобный
                            интерфейс для заполнения анкеты, оплата Госпошлины с
                            российской карты - подача документов на визу в США
                            <br />
                            <text className="additionalColor additionalWeight">
                                за считанные минуты.
                            </text>
                        </div>
                    </div>
                    <div className="main__topButton link">
                        <text>Подать заявление</text>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <Image src={bg} alt="bg" className="main__bg" />
                <div className="main__info">
                    <div className="main__infoTitle">
                        <text className="main__title">
                            Подача документов на визу США
                        </text>
                        <text className="main__infoText">
                            Разработанный ИИ-алгоритм ускорения записи и удобный
                            интерфейс для заполнения анкеты
                        </text>
                    </div>
                    <div className="main__infoBlock">
                        <div className="main__infoDiv">
                            <div className="main__Clipboard">
                                <Image src={clipboard} alt="clipboard" />
                            </div>
                            <div className="main__infoBlockTitle">EASY</div>
                            <div className="main__infoBlockText">
                                Простое заполнение формы DS-160 с подсказками
                            </div>
                        </div>
                        <div className="main__infoDiv">
                            <div className="main__Clipboard">
                                <Image src={clipboard} alt="clipboard" />
                            </div>
                            <div className="main__infoBlockTitle">FAST</div>
                            <div className="main__infoBlockText">
                                Собеседование в обход долгой очереди
                            </div>
                        </div>
                        <div className="main__infoDiv">
                            <div className="main__Clipboard">
                                <Image src={clipboard} alt="clipboard" />
                            </div>
                            <div className="main__infoBlockTitle">AI</div>
                            <div className="main__infoBlockText">
                                Разработанный ИИ-алгоритм для подачи документов
                            </div>
                        </div>
                        <div className="main__infoDiv">
                            <div className="main__Clipboard">
                                <Image src={clipboard} alt="clipboard" />
                            </div>
                            <div className="main__infoBlockTitle">FLEXIBLE</div>
                            <div className="main__infoBlockText">
                                Оплата Госпошлины США с российской карты
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={city} alt="city" className="main__city" />
                <div className="main__foooter">
                    <div className="main__submissionOfBocuments">
                        <div className="main__title">Подача документов</div>
                        <div className="main__submissionOfBocumentsStages">
                            <div className="main__submissionOfBocumentsStage">
                                <div className="main__stageNumber">1</div>
                                <div className="main__stageDiv">
                                    <div className="main__stageTitle">
                                        Подаете документы на визу
                                    </div>
                                    <div className="main__stageText">
                                        Заполняете анкету на нашем сайте.
                                        Необходимые документы: паспорт,
                                        загранпаспорт. Выбираете удобное
                                        консульство для собеседования
                                    </div>
                                </div>
                            </div>
                            <div className="main__submissionOfBocumentsStage">
                                <div className="main__stageNumber">2</div>
                                <div className="main__stageDiv">
                                    <div className="main__stageTitle">
                                        Оплачиваете
                                    </div>
                                    <div className="main__stageText">
                                        Оплатить услуги можно с любой российской
                                        карты (мир, виза, оплата через сайт)
                                    </div>
                                </div>
                            </div>
                            <div className="main__submissionOfBocumentsStage">
                                <div className="main__stageNumber">3</div>
                                <div className="main__stageDiv">
                                    <div className="main__stageTitle">
                                        Ожидаете ответа
                                    </div>
                                    <div className="main__stageText">
                                        Ожидание может занять от 10 дней. За
                                        дополнительную плату{' '}
                                        <text className="additionalColor additionalWeight">
                                            можно ускорить продвижение в очереди
                                        </text>{' '}
                                        ($450, от 1 дня)
                                    </div>
                                </div>
                            </div>
                            <div className="main__submissionOfBocumentsStage">
                                <div className="main__stageNumber">4</div>
                                <div className="main__stageDiv">
                                    <div className="main__stageTitle">
                                        Виза готова!
                                    </div>
                                    <div className="main__stageText">
                                        Уведомление придет вам на почту, можете
                                        смело отправляться в путешествие!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={iPhone} alt="iPhone" className="main__iPhone" />
                    <div className="main__faq">
                        <div className="main__title">FAQ</div>
                        <div className="main__faqDetails">
                            <details>
                                <summary>
                                    Сколько делают визу США?{' '}
                                    <Image
                                        src={chevron}
                                        alt="chevron"
                                        className="chevron"
                                    />
                                </summary>
                                <div>
                                    После приема документов на визу, консульство
                                    берет время на их обработку и проверку. Как
                                    правило, срок выдачи составляет около
                                    недели. <br />В период наибольшей
                                    загруженности инстанции этот период может
                                    растягиваться по времени до 10-14 дней.
                                    <br />
                                    Сотрудничая с нами можно ускорить процесс,
                                    доплатив за срочность. В этом случае{' '}
                                    <text className="additionalColor">
                                        есть шанс получить визу в течение 3 дней
                                        или при необходимости даже в течение 1
                                        дня.
                                    </text>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    На сколько дают визу США?{' '}
                                    <Image
                                        src={chevron}
                                        alt="chevron"
                                        className="chevron"
                                    />
                                </summary>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nobis pariatur
                                    necessitatibus fugiat quae ipsam totam,
                                    autem iusto, commodi vero mollitia ab
                                    similique, quos consequuntur? Quam similique
                                    velit expedita commodi accusantium?
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Что нужно для визы США?{' '}
                                    <Image
                                        src={chevron}
                                        alt="chevron"
                                        className="chevron"
                                    />
                                </summary>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nobis pariatur
                                    necessitatibus fugiat quae ipsam totam,
                                    autem iusto, commodi vero mollitia ab
                                    similique, quos consequuntur? Quam similique
                                    velit expedita commodi accusantium?
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Размер консульского и сервисного сбора на
                                    визу США?
                                    <Image
                                        src={chevron}
                                        alt="chevron"
                                        className="chevron"
                                    />
                                </summary>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nobis pariatur
                                    necessitatibus fugiat quae ipsam totam,
                                    autem iusto, commodi vero mollitia ab
                                    similique, quos consequuntur? Quam similique
                                    velit expedita commodi accusantium?
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Какие типы визы бывают?{' '}
                                    <Image
                                        src={chevron}
                                        alt="chevron"
                                        className="chevron"
                                    />
                                </summary>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nobis pariatur
                                    necessitatibus fugiat quae ipsam totam,
                                    autem iusto, commodi vero mollitia ab
                                    similique, quos consequuntur? Quam similique
                                    velit expedita commodi accusantium?
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="main__questions">
                        <div className="main__title">Остались вопросы?</div>
                        <div className="main__questionsMain">
                            <div className="main__questionsText">
                                Напишите нам в телеграм
                            </div>
                            <div className="main__questionsButton">
                                <Image src={vectorTg} alt="vectorTg" />
                                <text className="main__questionsButtonText">
                                    <Link href="https://t.me/Frowning_Cat">
                                        Чат поддержки
                                    </Link>
                                </text>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="footer__divText1">
                    <Link href="https://t.me/Frowning_Cat">
                        <text className="footer__telegram">
                            <Image src={telegram} alt="telegram" />
                            Чат поддержки
                        </text>
                    </Link>
                    <text>© 2000-2023. Все права защищены</text>
                    <Link href="https://t.me/Frowning_Cat">
                        <text>Условия использования сервиса</text>
                    </Link>
                    <Link href="https://t.me/Frowning_Cat">
                        <text>Политика конфиденциальности</text>
                    </Link>
                </div>
                <div className="footer__divText2">
                    <text>
                        Сайт не является публичной офертой согласно положениям
                        статьи 437 ГК РФ. ИП ..ОГРНИП 317505300078169
                    </text>
                </div>
            </footer>
        </div>
    );
}
