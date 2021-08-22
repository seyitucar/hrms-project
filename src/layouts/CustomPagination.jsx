import React, { useState } from 'react'
import { Card, Dropdown, Grid } from 'semantic-ui-react'
import { Pagination } from 'semantic-ui-react'

function CustomPagination({ displayItem }) {

    const [pageNumber, setPageNumber] = useState(1)
    const [itemPerPage, setItemPerPage] = useState(10)

    const paginationOptions = [
        { key: 10, text: "10 ilan", value: 10 },
        { key: 20, text: "20 ilan", value: 20 },
        { key: 50, text: "50 ilan", value: 50 },
        { key: 100, text: "100 ilan", value: 100 }
    ]

    const pageList = (pageNumber - 1) * itemPerPage

    const changePage = (e, { activePage }) => {
        setPageNumber(activePage);
    };

    const displayItems = displayItem.slice(pageList, pageList + itemPerPage)

    const pageCount = Math.ceil(displayItem.length / itemPerPage);

    const handleItemPerPage = (number) => {
        setItemPerPage(number);
        setPageNumber(1)
    }

    return (
        <div>

            <Card.Group>
                {displayItems}
            </Card.Group>
                <Grid>
                    <Grid.Row >
                        <Grid.Column floated="left" width={10}>
                            <Pagination
                                style={{ marginTop: "1em" }}
                                firstItem={null}
                                lastItem={null}
                                defaultActivePage={pageNumber}
                                totalPages={pageCount}
                                onPageChange={changePage}
                            />
                        </Grid.Column>
                        <Grid.Column floated="right" width={6}>
                            <label style={{ marginRight: "1em" }}>ilan/sayfa</label>
                            <Dropdown
                                onChange={(e, data) => { handleItemPerPage(data.value) }}
                                style={{ marginTop: "1em" }}
                                compact
                                selection
                                text={itemPerPage + " ilan"}
                                options={paginationOptions}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid >
        </div>
    )
}

export default CustomPagination
