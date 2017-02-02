initSidebarItems({"enum":[["Fate","Return type of message handling functions, signifying if an `Actor`/`SubActor` should live on after receiving a certain message type."]],"mod":[["swarm","Tools for dealing with large amounts of identical actors"]],"static":[["THE_SYSTEM","Global pointer to the singleton instance of `ActorSystem`. Set by `ActorSystem::create_the_system`."]],"struct":[["ActorSystem","An `ActorSystem` contains the states of all registered actors, message inboxes (queues) for each registered actor, and message handlers for each registered (`Actor`,`Message`) pair."],["ID","An ID that uniquely identifies an `Actor`, or even a `SubActor` within a `Swarm`"],["Packet","Combination of a message and its destination recipient id"]],"trait":[["Actor","Any Rust data structure can become an actor by:"],["Message","Trait that a datastructure must implement in order to be sent and received as a message."],["Recipient","Trait with which message handling for `Actor`/`SubActor`s is implemented"]]});