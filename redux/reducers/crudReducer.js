import {TYPES} from "../actions/crudActions";

export const CrudInitialState={
    db:null
}

export function CrudReducer(state,action){
    switch (action.type) {
        case TYPES.READ_ALL_DATA:{

        }
        case TYPES.CREATE_DATA:{

        }
        case TYPES.READ_ONE_DATA:{

        }
        case TYPES.UPDATE_DATA:{

        }
        case TYPES.DELETE_DATA:{

        }
        case TYPES.NO_DATA:
            return CrudInitialState;
        default :
            return state
    }
}