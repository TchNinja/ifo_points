import {
    createTransactionEvent,
    HandleBlock,
    HandleTransaction
  } from "forta-agent"
  import agent from "./agent"
  
  describe("pool created agent", () => {
    let handleTransaction: HandleTransaction
  
    const createTxEventWithLog= () => createTransactionEvent({
      transaction:{
        hash:"0xb48ff57326966812864ddfbf57e9a5540d334d9f6e7c42804b44bd1d37b63199",
        to:"0xdf4dbf6536201370f95e06a0f8a7a70fe40e388a",
        from:"123",
        nonce:1,
        gas:"",
        gasPrice:"",
        value:"",
        data:"",
        r:"",
        s:"",
        v:""

        
      },
      type:undefined,
      network:undefined,
      receipt: {
        status:true,
        root:"",
        gasUsed:"",
        cumulativeGasUsed:"",
        logsBloom:"",
        logs:[
            {address:"0xdf4dbf6536201370f95e06a0f8a7a70fe40e388a",
             topics:[
                 "0x04bc07bcb78bb21e5665cf01cd24f6a6a06e21fd20d60df8f0fa8d58c66f2934",
                 "0x0000000000000000000000003b4912dfd8bb799464e6552c166b28553ac0ada5",
                 "0x000000000000000000000000000000000000000000000000000000001e773990",
                ],
             data:"0x0000000000000000000000000000000000000000000000000000000000000064",
             blockHash:"",
             blockNumber:1,
             logIndex:1,
             transactionHash:"",
             transactionIndex:1,
             removed:false
            
            
            }
        ],
        contractAddress:"0x5d2BF248A2a31Da2bdC8FD0b0B6c3ceE71f7175A",
        blockHash:"",
        blockNumber:1,
        transactionHash:"",
        transactionIndex:1

      },
      block:{}as any,
      


    })
  
    beforeAll(() => {
      handleTransaction = agent.handleTransaction
    })
  
    describe("token event", () => {
      it("findings length == 1", async () => {
        const txEvent = createTxEventWithLog()
  
        const findings = await handleTransaction(txEvent)
  
        expect(findings.length).toBe(1)
      })
  
    })
  })