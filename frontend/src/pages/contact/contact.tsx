import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import { emailJs } from "../../constants/emailjs";

interface ContactProps {
    className?: string;
}

const Contact = (props: ContactProps) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { target } = event;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        emailjs
            .send(
                emailJs.serviceId,
                emailJs.templateId,
                {
                    from_name: form.name,
                    from_email: form.email,
                    to_name: "Chi Tam Nguyen",
                    phone: form.phone,
                    message: form.message,
                },
                emailJs.publicKey,
            )
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    return (
        <>
            <div className="mb-5 flex h-[100px] items-center text-4xl">
                Contact
            </div>
            <motion.div
                className="flex w-5/6 flex-col items-start justify-center rounded-xl bg-white p-14 md:w-3/4 lg:w-3/5"
                variants={{
                    off: {
                        y: 20,
                        opacity: 0,
                    },
                    on: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 1,
                        },
                    },
                }}
                initial="off"
                whileInView="on"
                viewport={{ once: true }}
            >
                <form
                    className="flex w-full flex-col items-center space-y-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        className="text-md w-full rounded-md border border-gray-400 bg-white p-3"
                        placeholder="Your name (*)"
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        className="text-md w-full rounded-md border border-gray-400 bg-white p-3"
                        placeholder="Your email address (*)"
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        className="text-md w-full rounded-md border border-gray-400 bg-white p-3"
                        placeholder="Your phone number"
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        className="text-md w-full rounded-md border border-gray-400 bg-white p-3"
                        placeholder="Your message to me (*)"
                        rows={5}
                        required
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="shadow-primary rounded-xl border border-gray-300 bg-[#345D95] px-20 py-3 font-bold shadow-md outline-none hover:bg-[#2b558f] active:bg-[#16488c]"
                    >
                        <p className="text-white">{"Send"}</p>
                    </button>
                </form>
            </motion.div>
        </>
    );
};

export default Contact;
