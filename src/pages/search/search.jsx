import React from 'react'
import { useState } from 'react'
import { proyects } from '../projects-list/proyects-data'
import { FaSearch } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';


function Search() {
  const [proyectsTable, setProyectsTable] = useState(proyects)
  const [searchText, setSearchText] = useState("")
  //setProyectsTable(proyects)
  //console.log(proyectsTable)

  const getProyects = async () => {
    //await axios.get()
  }

  const searchProyectsByKeyword = (keyword) => {
    var results =  proyects.filter((element) => {
      if(element.title.toString().toLowerCase().includes(keyword.toLowerCase())){
        return element;
      }
    });
    setProyectsTable(results);
  }

  return (
    <div className='searchPage'>
      <h1>Buscar Proyecto</h1>
      <Container className='card'>
        <div className='containerInput'>
          <Row>
            <Col>
              <input
                className='form-control inputSearch'
                value={searchText}
                placeholder="Buscar por nombre del proyecto"
                onChange={
                  e => {
                    setSearchText(e.target.value)
                    searchProyectsByKeyword(e.target.value)
                  }
                }
              />
            </Col>
            <Col xs={2}>
              <button>
                <FaSearch/>
              </button>
            </Col>
          </Row>
        </div>
        <div className='table-responsive'>
          <table className='table table-sm table-bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Descripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proyectsTable && proyectsTable.map((proyect)=>(
                <tr key={proyect.id}>
                  <td>{proyect.id}</td>
                  <td>{proyect.title}</td>
                  <td>{proyect.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </Container>
    </div>
  )
}

export default Search