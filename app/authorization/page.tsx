import Link from 'next/link';
import eye from '../../public/eye.png';
import bg_site from '../../public/bg_site.png';
import Image from 'next/image';

export default function Authorization() {
    return (
        <div>
            <header className="header"></header>
            <div className="authorization">
                <div>
                    <Image src={bg_site} alt="bg_site" className="bg_site" />
                </div>
                <div className="authorization__div">
                    <div className="authorization__text">
                        <div className="authorization__textTitle">Вход</div>
                        <div className="authorization__textLink">
                            Если вы не зарегистрированы, вы можете
                            <Link
                                href="/authorization"
                                className="authorization__textHref"
                            >
                                {' '}
                                Зарегестрироваться
                            </Link>
                        </div>
                    </div>
                    <div className="authorization__input">
                        <input
                            className="authorization__inputText"
                            placeholder="Эл. почта / Телефон "
                        ></input>
                        <input
                            className="authorization__inputText input_img"
                            placeholder="Пароль"
                        ></input>
                        <Image src={eye} alt="eye" className="eye link" />
                        <Link href="/">
                            <button className="authorization__button">
                                Войти
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
