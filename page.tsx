import Image from 'next/image';
import Link from 'next/link';
import ru from '../public/RU.png';
import chevronDownGray from '../public/chevron.down.gray.png';
import arrow from '../public/arrow.png';
import telegram from '../public/telegram.png';
import clipboard from '../public/clipboard.png';
import bg from '../public/bg.png';
import site from '../public/site.png';

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
                <Image src={site} alt="site" className="main__site" />
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
