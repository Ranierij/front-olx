import styled from 'styled-components'

export const SearchArea = styled.div`
    background-color:#ddd;
    border-bottom: 1px solid #ccc;
    padding: 20px 0;

.searchBox {
    background-color:#9bb83c;
    padding:20px 15px;
    border-radius:5px;
    box-shadow:1px 1px 1px 0.3px rgba(0. 0. 0. 0.2);
    display:flex;

    form{
        flex:1%;
        display:flex;

        input, select {
            height:40px;
            border: 0;
            border-radius: 5px;
            outline: 0;
            font-size: 15px;
            color: #000;
            margin-right: 20px;
        }

        input {
            flex: 1;
            padding: 0 10px;
        }

        select{
            width:100px;
        }

        button{
            background-color: #49aeef;
            font-size: 15px;
            border:0;
            border-radius: 5px;
            color: #fff;
            height: 40px;
            padding: 0 20px;
            cursor: pointer;

            &:hover{
                background-color: #429fdb;
            }
        }
    }
}



`




export const PageArea = styled.div`
    form{
        background-color: #fff;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
        margin-bottom: 40px;
        
        .area {
            display: flex;
            align-items: center;
            padding: 10px;
            max-width: 500px;

            .area--title{
                width: 200px;
                text-align: right;
                padding-right: 20px;
                font-weight: bold;
                font-size: 14px;
            }

            .area--input{
                flex: 1;
            }

            input {
                width: 100%;
                font-size: 14px;
                padding: 5px;
                border: 1px solid #ddd;
                border-radius: 3px;
                outline: 0;
                transition: all ease  0.4s; 

                &:focus {
                    border: 1px solid #333;
                    color:#333;
                }
            }

            .check{
                float:left;
                width: auto;
            }
            button {
                background-color: #0089ff;
                border: 0;
                outline: 0;
                padding: 5px 10px;
                border-radius: 4px;
                color: #fff;
                font-size: 15px;
                cursor: pointer;

                &:hover {
                    background-color: #006fce;
                }
            }


        }
    }
`