import Image from 'next/image';
import Link from 'next/link';
import ru from '../public/RU.png';
import chevronDownGray from '../public/chevron.down.gray.png';
import telegram from '../public/telegram.png';

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
            <main className="main"></main>
            <footer className="footer"></footer>
        </div>
    );
}
