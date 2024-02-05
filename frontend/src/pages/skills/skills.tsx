import { domains } from "../../constants/domains";
import Domain from "../../components/domain/domain";

interface SkillProps {}

const Skills = (props: SkillProps) => {
    return (
        <div className="px-5">
            <div className="flex h-[100px] items-center justify-center text-5xl text-white">
                Skills
            </div>

            <div className="flex justify-center flex-wrap">
                {domains.map((domain) => {
                    return (
                        <Domain
                            key={domain.domainId}
                            domainName={domain.domainName}
                            techs={domain.techs}
                            className="my-3"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
