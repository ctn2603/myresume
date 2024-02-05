interface SectionProps {
    id: string;
    background: string;
    children: React.ReactNode;
}

const Section = (props: SectionProps) => {
    return (
        <section
            id={props.id}
            className={`${props.background} bg-red flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-20 font-rubik min-h-[100vh]`}
        >
            {props.children}
        </section>
    );
};

export default Section;
