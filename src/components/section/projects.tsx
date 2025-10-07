import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from "../section"
import { GridItem,WorkGridItem,GridItemNoLive } from '../grid-item'

import thumbFishWorkflow from '../../../public/images/tenor.png'
import github from '../../../public/images/github.png'
import medium from '../../../public/images/medium.png'

const ProjectsSection = () => {
    return (
        <div style={{ marginTop: '30px' }}>
            {/* <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Project 1 "
                        thumbnail={thumbFishWorkflow}
                        href="#"
                        demo="#"
                        code="#"
                    />
                    <GridItem
                        title="Project 2"
                        thumbnail={thumbFishWorkflow}
                        href="#"
                        demo="#"
                        code="#"
                    />
                </SimpleGrid>
            </Section>
            <Section delay={0.2}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Project 1 "
                        thumbnail={thumbFishWorkflow}
                        href="#"
                        demo="#"
                        code="#"
                    />
                    <GridItem
                        title="Project 2"
                        thumbnail={thumbFishWorkflow}
                        href="#"
                        demo="#"
                        code="#"
                    />
                </SimpleGrid>
            </Section> */}
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItemNoLive
                        title="Nanpipat's Github"
                        thumbnail={github}
                        href="https://github.com/nanpipat"
                        demo="https://github.com/nanpipat"
                        code="https://github.com/nanpipat"
                    >
                        My coding portfolio and projects
                    </GridItemNoLive>
                    <GridItemNoLive
                        title="Medium Blogs"
                        thumbnail={medium}
                        href="https://medium.com/@nanpipat.k"
                        demo="https://medium.com/@nanpipat.k"
                        code="https://medium.com/@nanpipat.k"
                    >
                        Technical articles and tutorials
                    </GridItemNoLive>
                </SimpleGrid>
            </Section>
            
        </div>
    )
}

export default ProjectsSection