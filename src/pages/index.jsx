import me from "@src/assets/images/me.png"
import { SkillList } from "../components/SkillList";
import { Education_Licenses } from "../components/Education_Licenses";
export const HomePage = () => {
  return (
      <div className="h-full overflow-y-auto">
          <div className="flex flex-col md:flex-row cursor-default justify-around items-center pt-2 pb-5">
              <div className="flex flex-col font-bold">
                  <span className="text-lg">Hi, I&apos;m</span>
                  <h2 className="text-6xl text-blue-600 drop-shadow-md text-center md:text-start hover:drop-shadow-xl duration-150 ease-linear">
                      Mohammad Moradi
                  </h2>
                  <p className="text-center text-xl">
                      Junior Web Front-end (ReactJs) developer
                  </p>
              </div>
              <img
                  src={me}
                  className="size-72 pt-2 duration-200 ease-linear rounded-full hover:shadow-lg hover:shadow-blue-950"
                  alt="mohammad-moradi"
              />
          </div>
          <div className="py-5 border-y-2 cursor-default">
              <h3 className="font-bold text-center text-2xl text-blue-950">
                  Introduction
              </h3>
              <p className="p-3 text-center md:text-start">
                  Hi! 👋 I&apos;m <strong> Mohammad Moradi, a Junior Front-End Developer
                  specializing in React.js  </strong>⚛️. During my Computer Engineering
                  studies 🎓, I completed a comprehensive Front-End course
                  with Roshdana, which laid a solid foundation for my web
                  development journey. Later, I joined the Quera front-end
                  React Bootcamp to deepen my knowledge and gain hands-on
                  experience with real-world projects 🚀.
              </p>
              <p className="p-3 text-center md:text-start">
                  I’m passionate about designing beautiful and functional user
                  interfaces 🎨 and constantly seek new challenges to learn
                  and grow 📚. My strengths include JavaScript, HTML, CSS,
                  Tailwind, and React.js 💻. With a combination of hard work,
                  organization, and positive energy ✨, I strive to deliver
                  outstanding results in every project.
              </p>
              <p className="p-3 text-center md:text-start">
                  If you&apos;re looking for a dedicated collaborator for front-end
                  projects, I&apos;d be thrilled to connect with you! 🤝
              </p>
          </div>
          <div className="py-5 ">
                <SkillList />
            </div>
            <div className="py-5  border-y-2">
                <Education_Licenses />
            </div>
      </div>
  );
};

