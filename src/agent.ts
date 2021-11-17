import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,
  getJsonRpcUrl

} from 'forta-agent'
import Web3 from 'web3';
import {EVENT,CONTRACT} from "./consts"

const web3 = new Web3(getJsonRpcUrl())
const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];

  const events = txEvent.filterLog(EVENT,CONTRACT)

  for (const event of events){

    findings.push(

      Finding.fromObject({
        name: "IFO_USER_INCREASE",
        description: `Increase user point event`,
        alertId: "FORTA-12000",
        severity: FindingSeverity.Info,
        type: FindingType.Info,
        metadata:{
          user:event.args.userAddress,
          points:event.args.numberPoints.toString()
        }
       
        

      })
     )
  }

  return findings;
}

export default {
  handleTransaction
}