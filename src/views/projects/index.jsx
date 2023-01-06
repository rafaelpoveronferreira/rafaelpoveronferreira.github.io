
import TechList from './components/TechList'
import ProjectHeader from './components/ProjectHeader'
import ProjectDescription from './components/ProjectDescription'
import Arrow from './components/Arrow'
import SVG from './components/SVG'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return (
        <section id="projects" className="relative w-full h-screen flex flex-col justify-between">
            <SVG rotate={'rotate-180'}/>

            <div className="bg-dark-gray w-full h-[82%] flex flex-col gap-6 justify-center items-center ">
                <Arrow icon={faCircleChevronUp} link={'#home'}/>
                <div id="project-view"
                    className="rounded-xl outline outline-solid outline-fading-white-10 bg-fading-white-5 w-4/5 h-[85%] md:w-2/3 md:h-3/4">
                        <ProjectHeader />
                        <TechList />
                        <ProjectDescription />
                </div>
                <Arrow icon={faCircleChevronDown} link={'#contact'}/>
            </div>

            <SVG rotate={''}/>
        </section>
    )
}

export default Projects;
