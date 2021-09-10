## Redis Notes

* pub sub is important concept in Redis which does real time publish and subscribe like doing likes on yt videos which is shown at all the computers at same time but if in this case API was used then the user experience would be bad

|Commands/Syntax | Description |
| -------------- | ----------- |
| PUBLISH channel_name value | Publisher are those which sends message to the channel, it displays the value in the subscriber with value_type, channel_name and value |
| SUBSCRIBE channel_name | Subcriber accepts messages from publisher to the channel mentioned |
| PSUBCRIBE d* | Used as Pattern Matching It subscribes all the channels starting from d  |
| UNSUBSCRIBE devsnest | Unsubscribes the channel |
| PUNSUBSCRIBE d* | Unsubscribes all the channels starting from d |

* History wasn't  maintained on multiple channels on redis so we have Streams which has pipelines that is scalable from redis Version 5.0

|Commands/Syntax | Description |
| -------------------------- | ----------- |
| XADD mystream 10000 name | XADD stream_name id key, to give random id we can use * in place of id(time stamps is stored as id) but better to use our own unique id as it is makes us easier to work on frontend|
| XADD mystream 10000 name Anna | Anna is value and to add new value on the key id must be different |
| XADD mystream MAXLEN 100000 * name devs | 100000 is max length in pipeline so if more than that then the old value will be removed which saves memory in database |
| XREAD COUNT 200 STREAMS mystream 0 | From 0th position(if given 100 then from this id) we read the total 200rows in the mystream channel | 
| XREAD BLOCK 10000 STREAMS mystream 0 | If we don't get any data for 10sec then we close the stream that we don't need to read more, this means that it is disconnected but if we don't want be disconnected then we use BLOCK 0 millisecond |
| XREAD BLOCK 10000 STREAMS mystream $ | It wait's for maxm 10secs till the data arrives and displays them if data arrives then it works as pubsub else it gets disconnects |
| XRANGE mystream 0 -1 | It is like for loop as in LRANGE  here we can keep starting id and ending id|
| XRANGE mystream 1000-0 1020-0 COUNT 5 | If there is thousand of values in bettween the range but we need only 5 rows then we use COUNT 5 |
| XRANNGE mystream - + COUNT 2 | If we don't know the range then we can use + - and it displays 2 values inside the range |
| XREVRANGE mystream + - COUNT 2 | It displays 2 value from the reverse Order |


### Some extra notes 
You can try those commands of PUB SUB via multiple terminals like we have 3 terminal A,B,C and A has Published a channel initially and B,C has subscribed the channel created then if we PUBLISH more value in terminal A then it gets displayed on both B and C terminal

 THA = Create a simple chatting application and find the edge cases 
