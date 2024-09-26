import React,{ Component } from 'react';
import { Meta, Story } from "@storybook/react";
import { Download } from './stories/Input.stories';

// function Hello ({color, name, isSpecial }){
//     return (
//         <div style={{
//             color
//         }}>
//             {isSpecial ? <b>*</b> : null}
//             안녕하세요 {name}
//         </div>
//     );
// }
class Hello extends Component {
    static defaultProps = {
        name:'이름fsdasdsadfdsfsd없음',
    };
    
    render(){
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b></b>}
                ~안녕하세요  {name}
                {Download}
            </div>
        
        );
    }
}


// Hello.defaultProps = {
//     name: '이름없음'
// };

export default Hello;