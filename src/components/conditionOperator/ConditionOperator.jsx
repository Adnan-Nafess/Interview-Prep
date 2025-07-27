import LogicalAnd from "./LogicalAnd"
import LogicalOr from "./LogicalOr"
import NullishOperator from "./NullishOperator"
import OptinalChannig from "./OptinalChannig"

const ConditionOperator = () => {
  return (
    <div>
        {/* Logical Or Operator */}
        <LogicalOr />

        {/* Logical And Operator */}
        <LogicalAnd />

        {/* Optinal Channing */}
        <OptinalChannig />

        {/* Nullish Operator */}
        <NullishOperator />

    </div>
  )
}

export default ConditionOperator