import React from 'react';
import MySelf from '../common/myself/page/MySelf';
import Skills from '../common/skills/page/Skills';
import Education from '../common/education/page/Education';
import Experience from '../common/experience/page/Experience';
import '../ui/about.css'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import Projects from '@/components_Profile_uiux/Projects/page/Projects';

const About = () => {

return (
        <div className="flex gap-2 w-full h-screen p-2">
            <ResizablePanelGroup
                direction="vertical"
                className="max-w-full rounded-lg md:min-w-[450px] text-white gap-2"
                >
                <ResizablePanel defaultSize={50}>
                    <ResizablePanelGroup 
                        direction="horizontal"
                        className='gap-2'
                        >
                            <ResizablePanel defaultSize={30}>
                                <MySelf />
                            </ResizablePanel>
                            <ResizableHandle className='bg-white/50'/>
                            <ResizablePanel defaultSize={70}>
                                <Skills />
                            </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
                <ResizableHandle className='bg-white/50'/>
                <ResizablePanel defaultSize={50}>
                    <ResizablePanelGroup 
                        direction="horizontal"
                        className='gap-2'
                        >
                            <ResizablePanel defaultSize={50}>
                                <Education />
                            </ResizablePanel>
                            <ResizableHandle className='bg-white/50' />
                            <ResizablePanel defaultSize={50}>
                                <Experience />
                            </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
            <Projects />
        </div>
    );
}  

export default About;