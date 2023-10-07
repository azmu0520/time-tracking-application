import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgb(244, 244, 244);

  input,
  select {
    border: 1px solid #d9d9d9;
    color: #5f5f5f;
    display: block;
    width: 100%;
    height: calc(1.25 * 1em + 1.4rem + 1px);
    padding: 0.7rem 0.7rem;
    font-size: 0.96rem;
    font-weight: 400;
    line-height: 1.25;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  textarea.form-control {
    width: 100%;
    line-height: 1.6rem;
    font-size: 1rem;
    height: auto;
    padding: 0.7rem 0.7rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid #d9d9d9;
    color: #5f5f5f;
  }
  .btn-primary,
  input[type="submit"] {
    border-color: #4839eb !important;
    background-color: #7367f0 !important;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 0 solid transparent;
    padding: 0.9rem 2rem;
    font-size: 1rem;
    line-height: 1;
    border-radius: 0.4285rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  input[hidden] {
    display: none;
  }
  .flat-danger {
    background-color: transparent;
    color: #ea5455;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 0 solid transparent;
    padding: 0.9rem 2rem;
    font-size: 1rem;
    line-height: 1;
    border-radius: 0.4285rem;

    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;
  }
`;

Wrap.Card = styled.div`
  margin-bottom: 2.2rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
`;

Wrap.Header = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: none;
  padding: 1.5rem 1.5rem 0;
  background-color: transparent;
  div {
    font-weight: 500;
    letter-spacing: 0.05rem;
    font-size: 1.32rem;
    color: #2c2c2c;
  }
`;

Wrap.CardBody = styled.div`
  padding: 1.5rem;
`;

Wrap.FormGroup = styled.div`
  margin-bottom: 3rem !important;
  position: relative;
  label {
    color: #464646;
    font-size: 0.85rem;
    margin-bottom: 0;
    padding-left: 0.2rem;
  }

  .invalid-tooltip {
    position: absolute;
    left: 0;
    z-index: 5;
    /* display: none; */
    max-width: 100%;
    padding: 0.4rem 0.775rem;
    font-size: 0.857rem;
    line-height: 1.45;
    color: #fff;
    background-color: #ea5455;
    border-radius: 0.428rem;
  }
  .form-control.is-invalid {
    border-color: #ea5455;
  }

  .img-fluid {
    max-height: 400px;
    height: 100%;
  }
  .upload-wrap {
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-between;
    flex-wrap: wrap;
    label {
      background-color: transparent;
      color: #7367f0;
      display: inline-block;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      user-select: none;
      border: 0 solid transparent;
      padding: 0.9rem 2rem;
      font-size: 1rem;
      line-height: 1;
      border-radius: 0.4285rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  }
`;
