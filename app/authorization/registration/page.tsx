import Link from 'next/link';
import bg_site from '../../../public/bg_site.png';
import Image from 'next/image';

export default function Registration() {
    return (
        <div>
            <header className="header"></header>
            <div className="registration">
                <div>
                    <Image src={bg_site} alt="bg_site" className="bg_site" />
                </div>
                <div className="registration__div">
                    <div className="authorization__text">
                        <div className="authorization__textTitle">
                            Регистрация
                        </div>
                        <div className="authorization__textLink">
                            Если вы уже зарегистрированы, вы можете
                            <Link
                                href="/authorization"
                                className="authorization__textHref"
                            >
                                {' '}
                                Войти
                            </Link>
                        </div>
                    </div>
                    <div className="registration__inputAndButt">
                        <div className="registration__input">
                            <input
                                className="authorization__inputText"
                                placeholder="Эл. Почта"
                                type="email"
                            ></input>
                            <input
                                className="authorization__inputText"
                                placeholder="Имя"
                                type="text"
                            ></input>
                            <input
                                className="authorization__inputText"
                                placeholder="Фамилия"
                                type="text"
                            ></input>
                            <input
                                className="authorization__inputText"
                                placeholder="Номер телефона"
                            ></input>
                            <input
                                className="authorization__inputText"
                                placeholder="Придумайте пароль"
                                type="password"
                            ></input>
                            <input
                                className="authorization__inputText"
                                placeholder="Повторите пароль"
                                type="password"
                            ></input>
                        </div>
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
