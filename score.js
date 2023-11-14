import React from 'react';
import './style.css';

function Score(){ //컴포넌트 이름은 반드시 대문자로 시작되는 PascalCase
    return (
        <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./style.css" type="text/css" />
  <title>3_A_201944005_신수민</title>
  <div id="first">
    <h2 className="title">1학년</h2>
    <div className="btn_box">
      <input type="button" defaultValue="추가" />
      <input type="button" defaultValue="삭제" />
      <input type="button" defaultValue="저장" />
    </div>
    <table>
      <thead>
        <tr>
          <th />
          <th>이수</th>
          <th>필수</th>
          <th>과목명</th>
          <th>학점</th>
          <th>출석점수</th>
          <th>과제점수</th>
          <th>중간고사</th>
          <th>기말고사</th>
          <th>총점</th>
          <th>평균</th>
          <th>성적</th>
        </tr>
      </thead>
      <tbody className="scores">
        {/*과목 별 점수*/}
      </tbody>
      <tfoot>
        <tr className="sum">
          <td />
          <td colSpan={3}>합계</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tfoot>
    </table>
  </div>
  <div id="second">
    <h2 className="title">2학년</h2>
    <div className="btn_box">
      <input type="button" defaultValue="추가" />
      <input type="button" defaultValue="삭제" />
      <input type="button" defaultValue="저장" />
    </div>
    <table>
      <thead>
        <tr>
          <th />
          <th>이수</th>
          <th>필수</th>
          <th>과목명</th>
          <th>학점</th>
          <th>출석점수</th>
          <th>과제점수</th>
          <th>중간고사</th>
          <th>기말고사</th>
          <th>총점</th>
          <th>평균</th>
          <th>성적</th>
        </tr>
      </thead>
      <tbody className="scores">
        {/*과목 별 점수*/}
      </tbody>
      <tfoot>
        <tr className="sum">
          <td />
          <td colSpan={3}>합계</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tfoot>
    </table>
  </div>
  <div id="third">
    <h2 className="title">3학년</h2>
    <div className="btn_box">
      <input type="button" defaultValue="추가" />
      <input type="button" defaultValue="삭제" />
      <input type="button" defaultValue="저장" />
    </div>
    <table>
      <thead>
        <tr>
          <th />
          <th>이수</th>
          <th>필수</th>
          <th>과목명</th>
          <th>학점</th>
          <th>출석점수</th>
          <th>과제점수</th>
          <th>중간고사</th>
          <th>기말고사</th>
          <th>총점</th>
          <th>평균</th>
          <th>성적</th>
        </tr>
      </thead>
      <tbody className="scores">
        {/*과목 별 점수*/}
      </tbody>
      <tfoot>
        <tr className="sum">
          <td />
          <td colSpan={3}>합계</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tfoot>
    </table>
  </div>
</div>

    );
 }
 export default Score;