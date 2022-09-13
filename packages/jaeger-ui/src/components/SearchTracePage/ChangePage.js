import React from 'react';
import { Button, Input, Form } from 'antd';

const {Search} = Input;
const FormItem = Form.Item;

type ChangePageProps = {
    totalPage: number;
    currentPage: number;
    changePage: any;
    form: any
}

class ChangePage extends React.PureComponent<ChangePageProps>{
    render(){    
        const {
        totalPage,
        currentPage,
        } = this.props;

        const items = [];
        const {getFieldDecorator} = this.props.form;

        if (totalPage < 6 && totalPage > 0){
            for (let i = 1; i <= totalPage; i++) {
                items.push( <Button key={`page-${i}`} onClick={() => {this.props.changePage(i)}}>{i}</Button> );
              }
        }else if (currentPage === 2 || currentPage === 1){
            items.push( <Button key='page-1' onClick={() => {this.props.changePage(1)}}>1</Button> );
            items.push( <Button key='page-2' onClick={() => {this.props.changePage(2)}}>2</Button> );
            items.push( <Button key='page-3' onClick={() => {this.props.changePage(3)}}>3</Button> );
            items.push( <span key='dot' > ... </span>);
            items.push( <Button key={`page-${totalPage}`} onClick={() => {this.props.changePage(totalPage)}}>{totalPage}</Button> );
        }else if (currentPage === 3){
            items.push( <Button key='page-1' onClick={() => {this.props.changePage(1)}}>1</Button> );
            items.push( <Button key={`page-${currentPage - 1}`} onClick={() => {this.props.changePage(currentPage - 1)}}><span>{currentPage - 1}</span></Button> );
            items.push( <Button key={`page-${currentPage}`} onClick={() => {this.props.changePage(currentPage)}}><span>{currentPage}</span></Button> );
            items.push( <Button key={`page-${currentPage + 1}`} onClick={() => {this.props.changePage(currentPage + 1)}}><span>{currentPage + 1}</span></Button> );
            items.push( <span key='dot' > ... </span>);
            items.push( <Button key={`page-${totalPage}`} onClick={() => {this.props.changePage(totalPage)}}>{totalPage}</Button> );
        }else if (currentPage === totalPage - 2){
            items.push( <Button key='page-1' onClick={() => {this.props.changePage(1)}}>1</Button> );            
            items.push( <span key='dot' > ... </span>);
            items.push( <Button key={`page-${currentPage - 1}`} onClick={() => {this.props.changePage(currentPage - 1)}}>{currentPage - 1}</Button> );
            items.push( <Button key={`page-${currentPage}`} onClick={() => {this.props.changePage(currentPage)}}>{currentPage}</Button> );
            items.push( <Button key={`page-${currentPage + 1}`} onClick={() => {this.props.changePage(currentPage + 1)}}>{currentPage + 1}</Button> );
            items.push( <Button key={`page-${totalPage}`} onClick={() => {this.props.changePage(totalPage)}}>{totalPage}</Button> );
        }else if (currentPage === totalPage - 1 || currentPage === totalPage){
            items.push( <Button key='page-1' onClick={() => {this.props.changePage(1)}}>1</Button> );
            items.push( <span key='dot' > ... </span>);
            items.push( <Button key={`page-${totalPage - 2}`} onClick={() => {this.props.changePage(totalPage - 2)}}>{totalPage - 2}</Button> );
            items.push( <Button key={`page-${totalPage - 1}`} onClick={() => {this.props.changePage(totalPage - 1)}}>{totalPage - 1}</Button> );
            items.push( <Button key={`page-${totalPage}`} onClick={() => {this.props.changePage(totalPage)}}>{totalPage}</Button> );
        }else {
            items.push( <Button key='page-1' onClick={() => {this.props.changePage(1)}}>1</Button> );
            items.push( <span key='dot-1' > ... </span>);
            items.push( <Button key={`page-${currentPage - 1}`} onClick={() => {this.props.changePage(currentPage - 1)}}>{currentPage - 1}</Button> );
            items.push( <Button key={`page-${currentPage}`} onClick={() => {this.props.changePage(currentPage)}}>{currentPage}</Button> );
            items.push( <Button key={`page-${currentPage + 1}`} onClick={() => {this.props.changePage(currentPage + 1)}}>{currentPage + 1}</Button> );
            items.push( <span key='dot-2' > ... </span>);
            items.push( <Button key={`page-${totalPage}`} onClick={() => {this.props.changePage(totalPage)}}>{totalPage}</Button> );
        }

        const onSearch = value => {
            if (!Number.isNaN(value) && value !== '-' && value !== '' && Number(value) < totalPage && Number(value) > 1){
                this.props.changePage(Number(value));
            }
        }

        return(
            <div className="ChangePageButton" style={{position: `fixed`, bottom: `0px`, left: `0px`}}>
                <Button key='previous-page' onClick={() => {this.props.changePage(currentPage - 1)}}>Previous</Button>
                {items}
                <Button key='next-page' onClick={() => {this.props.changePage(currentPage + 1)}}>Next</Button>
                <Form>
                    <FormItem>
                        {getFieldDecorator('search-page-box',{
                            rules:[{
                                required: true,
                                message: "Input Required!"
                            },
                            {
                                validator: (rules, value, callback) => {
                                    if (value === ''){
                                        callback()
                                    }
                                    else if (Number.isFinite(Number(value))){
                                        if (Number(value) < 1){
                                            callback(new Error('Input Should > 0!'))
                                        }else if (Number(value) > totalPage){
                                            callback(new Error('Exceed Total Page!'))
                                        }else{
                                            callback()
                                        }
                                    }else {
                                        callback(new Error('Please Input Number!'))
                                    }
                                }
                            }
                        ]
                        })  (<Search 
                                placeholder="Goto Page" 
                                enterButton="Search"
                                onSearch={onSearch}
                                style={{ width: 200, bottom: "-1.3px"}} />)
                            }
                        
                    </FormItem>
                </Form>
                
            </div>
        )
    }

}

export default Form.create()(ChangePage)
