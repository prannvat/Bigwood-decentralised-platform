type storage = {
    messages : ( address, string ) big_map;
  }


type parameter =
  | RegisterMessage of string

let initial_storage : storage = {
    messages = Big_map.empty;
  }

let main (param, store : parameter * storage) : operation list * storage =
  let new_storage = match param with
    | RegisterMessage message -> let new_messages = Big_map.update (Tezos.get_sender ()) (Some message) store.messages in
                                 {  store with messages = new_messages } in
  [], new_storage