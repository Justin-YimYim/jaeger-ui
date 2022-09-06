import React from 'react';
import { Button } from 'antd';

type ChangePageProps = {
    totalPage: number;
    currentPage: number;
    changePage: any;
}

export default class ChangePageButton extends React.PureComponent<ChangePageProps>{
    render(){    
        const {
        totalPage,
        currentPage,
        } = this.props;

        const items = [];

        if (totalPage < 6 && totalPage > 0){
            for (let i = 1; i < totalPage; i++) {
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

        return(
            <div className="ChangePageButton" style={{position: `fixed`, bottom: `0px`, left: `0px`}}>
                <Button key='previous-page' onClick={() => {this.props.changePage(currentPage - 1)}}>Previous</Button>
                {items}
                <Button key='next-page' onClick={() => {this.props.changePage(currentPage + 1)}}>Next</Button>
            </div>
        )
    }

}