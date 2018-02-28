import combinationIndex from '../views/combination/index';
import combinationMixins from '../views/combination/mixins';
import customInstruction from '../views/combination/customInstruction';
import combinationJsx from '../views/combination/jsx';
import combinationPlugIns from '../views/combination/plugIns';
import combinationFilter from '../views/combination/filter';

const combinationRoutes = [
    {
        path: '/combination',
        name: 'combination',
        meta: {
            title: '可复用性 & 组合'
        },
        component: combinationIndex,
        children: [
            {
                path: '/',
                redirect: '/combination/mixins'
            },
            {
                path: '/combination/mixins',
                component: combinationMixins
            },
            {
                path: '/combination/customInstruction',
                component: customInstruction
            },
            {
                path: '/combination/jsx',
                component: combinationJsx
            },
            {
                path: '/combination/plugIns',
                component: combinationPlugIns
            },
            {
                path: '/combination/filter',
                component: combinationFilter
            }
        ]
    }
];

export default combinationRoutes;
