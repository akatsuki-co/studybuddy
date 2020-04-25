import React from "react"
import Sidebar from "../components/Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Content from "../components/Content"
import routes from "../docs/python"

const Python = () => {
  const tableOfContents = {
    language: "python",
    sidebar: [
      {
        menu: "Getting Started",
        subMenu: [
          "Hello World",
          "Data Types",
          "Basic Syntax",
          "Constants",
          "Example",
        ],
      },
      {
        menu: "Intermediate",
        subMenu: ["Builtins", "Data Structures", "Basic Algorithms"],
      },
      {
        menu: "Advanced",
        subMenu: ["Sorting", "Advanced Data Structures", "Big O"],
      },
    ],
  }
  return (
    <section className='py-3'>
      <Container>
        <Row>
          <Sidebar data={tableOfContents}></Sidebar>
          <Content routes={routes}></Content>
        </Row>
      </Container>
    </section>
  )
}

export default Python