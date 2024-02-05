import { contacts } from "../../constants/contacts";

interface FooterProps {}

const Footer = (props: FooterProps) => {
    return (
        <div className="item flex flex-col items-center justify-evenly bg-black p-5 font-rubik sm:flex-row">
            <div className="p-4">
                <p className=" text-white">Copyright © 2023 Chi Tam Nguyen </p>
            </div>
            <div>
                {
                    <ul className="flex list-none gap-5">
                        {contacts.map((contact) => {
                            return (
                                <li key={contact.id}>
                                    <div className="cursor-pointer rounded-full bg-white p-2 hover:bg-gray-200">
                                        <a
                                            href={contact.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={contact.icon}
                                                alt="platform"
                                                className="h-6 w-6"
                                            />
                                        </a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                }
            </div>
            <div className="flex flex-col items-center p-4 md:items-center">
                <p className="text-sm text-white">
                    Designed by{" "}
                    <a
                        href="https://www.freepik.com"
                        className="text-white hover:text-[#E6A49A]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Freepik
                    </a>
                </p>
                <p className="text-sm text-white">
                    Icon made by{" "}
                    <a
                        href="https://www.flaticon.com/authors/freepik"
                        className="text-white hover:text-[#E6A49A]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Freepik
                    </a>{" "}
                    from{" "}
                    <a
                        href="https://www.flaticon.com"
                        className="text-white hover:text-[#E6A49A]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.flaticon.com
                    </a>{" "}
                </p>

                <p className="text-sm text-white">
                    Animation made by{" "}
                    <a
                        href="https://lottiefiles.com/Faiyaz_1"
                        className="text-white hover:text-[#E6A49A]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Faiyaz
                    </a>{" "}
                    from{" "}
                    <a
                        href="https://www.flaticon.com"
                        className="text-white hover:text-[#E6A49A]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.lottiefiles.com
                    </a>{" "}
                </p>
            </div>
        </div>
    );
};

export default Footer;
