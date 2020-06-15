import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from '../components/content/Content'
import { Switch, Route } from 'react-router-dom'

const Go = () => {
  const tableOfContents = {
    language: 'go',
    sidebar: [
      {
        menu: 'Basics',
        subMenu: [
          'Hello World',
          'Data Types',
          'Variables',
          'Loops',
          'Pointers',
          'Arrays',
          'Slices',
          'Maps',
          'Structs',
          'Interfaces',
          'Goroutines and Channels',
        ],
      },
      {
        menu: 'Data Structures',
        subMenu: [
          'Linked Lists',
          'Stacks and Queues',
          'Hash Tables',
          'Sets',
          'Trees',
          'Heaps',
          'Tries',
          'Graphs',
        ],
      },
      {
        menu: 'Algorithms',
        subMenu: ['Sorting', 'Searching'],
      },
    ],
  }

  return (
    <section className="py-3">
      <Container>
        <Row>
          <Sidebar data={tableOfContents}></Sidebar>
          <Switch>
            <Route
              path="/go/:topic"
              render={(props) => <Content {...props} language="go" />}
            />
            <Route
              path="/"
              render={(props) => (
                <Content {...props} language="go" defaultTopic="helloWorld" />
              )}
            />
          </Switch>
        </Row>
      </Container>
    </section>
  )
}

export default Go
