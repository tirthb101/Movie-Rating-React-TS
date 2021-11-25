import React from 'react';

// Styles
import { Wrapper, Content } from './movieinfobar.style';

// Helpers
import { calcTime, convertMoney} from '../../helpers';

type Props = {
    time: number;
    budget: number;
    revenue: number;
}

const Movieinfobar : React.FC <Props> = ({time , budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Running: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);


export default Movieinfobar;