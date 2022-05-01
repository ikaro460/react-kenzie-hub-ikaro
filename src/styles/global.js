import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        font-family: "Inter";
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        /*Primary Palette */

        --primary: #ff577f;
        --primary-focus: #ff427f;
        --primary-negative: #59323F;

        /*Grey Scale Palette*/

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;

        /*Feedback Palette*/

        --sucess: #3fe864;
        --negative: #e83f5b;
    }

    body {
        background-color: var(--grey-4);
        color: var(--grey-0);
        height: 100vh;
    }
    @media (min-width: 500px) {
    body{
        padding: 0 5%;
    }

    @media (min-width: 800px) {
        body{

            padding: 0 20%;
    }
    }
  }

    h1, h2 {
        color: var(--primary);
    }

    Button {
        cursor: pointer;
    }

`;
