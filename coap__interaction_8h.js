var coap__interaction_8h =
[
    [ "CoAP_Interaction", "struct_co_a_p___interaction.html", "struct_co_a_p___interaction" ],
    [ "CoAP_Interaction_t", "coap__interaction_8h.html#a990f27b88cecbcafb21f1481ee7c4b7c", null ],
    [ "CoAP_RespHandler_fn_t", "coap__interaction_8h.html#aae1ba74b761a67d786af00c19fdae30e", null ],
    [ "CoAP_ConfirmationState_t", "coap__interaction_8h.html#a2e06342af9dc47a72c951a65b53f7332", [
      [ "NOT_SET", "coap__interaction_8h.html#a2e06342af9dc47a72c951a65b53f7332a759c34a99344306429e887634b2d688e", null ],
      [ "ACK_SEND", "coap__interaction_8h.html#a2e06342af9dc47a72c951a65b53f7332abc3645a2798e52d2ea63dc3ec317f007", null ],
      [ "RST_SEND", "coap__interaction_8h.html#a2e06342af9dc47a72c951a65b53f7332ad1afe5c801153999d12c12fd40cef86e", null ]
    ] ],
    [ "CoAP_InteractionRole_t", "coap__interaction_8h.html#af78ae3e03c45521e1733456c45de0fc8", [
      [ "COAP_ROLE_NOT_SET", "coap__interaction_8h.html#af78ae3e03c45521e1733456c45de0fc8a36ddd4f3abb3615ea61739a7a23b646d", null ],
      [ "COAP_ROLE_SERVER", "coap__interaction_8h.html#af78ae3e03c45521e1733456c45de0fc8a21df662ad806c89a0efd210b631dd133", null ],
      [ "COAP_ROLE_NOTIFICATION", "coap__interaction_8h.html#af78ae3e03c45521e1733456c45de0fc8a522b57d600067ae5efcbeb255612eedc", null ],
      [ "COAP_ROLE_CLIENT", "coap__interaction_8h.html#af78ae3e03c45521e1733456c45de0fc8ae20c80da68205c481524a4adca84b570", null ]
    ] ],
    [ "CoAP_InteractionState_t", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7", [
      [ "COAP_STATE_NOT_SET", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7a47e71562385acd0ae83917e86c9041a5", null ],
      [ "COAP_STATE_HANDLE_REQUEST", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7ab40c400471653ab43c54dc4bb21b0a1e", null ],
      [ "COAP_STATE_RESOURCE_POSTPONE_EMPTY_ACK_SENT", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7af1af07988f5f8f254f5ebe3df559e53f", null ],
      [ "COAP_STATE_RESPONSE_SENT", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7a1b38fda6d39eca2e2d55fe549e06735c", null ],
      [ "COAP_STATE_RESPONSE_WAITING_LEISURE", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7aec77ea68f30eb6bc213fb6c35e308f4e", null ],
      [ "COAP_STATE_READY_TO_NOTIFY", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7af331c89b1d92bb3873cd559b2c613521", null ],
      [ "COAP_STATE_NOTIFICATION_SENT", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7aa5948091d7c57d057c2c274d6f38e08f", null ],
      [ "COAP_STATE_READY_TO_REQUEST", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7aabf2d7bbaf4ff4592dde99cc6706dea5", null ],
      [ "COAP_STATE_WAITING_RESPONSE", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7a523424b64619c96509842f3a60b5fe0b", null ],
      [ "COAP_STATE_HANDLE_RESPONSE", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7a44b66355143a0a17e041568adf459827", null ],
      [ "COAP_STATE_FINISHED", "coap__interaction_8h.html#ae681e168a1dddb4fee15a366e4b6f6c7a6ed2fe70ee1086ea7d67b9a35dd824cf", null ]
    ] ],
    [ "CoAP_DeleteInteraction", "coap__interaction_8h.html#a87504add6041e675d96309139014f7dd", null ],
    [ "CoAP_EnableAckTimeout", "coap__interaction_8h.html#a5749a2385a19ee89cffaf5c453d61ab7", null ],
    [ "CoAP_EnqueueLastInteraction", "coap__interaction_8h.html#a7f85fd427407a30f74c75d0e68c0801b", null ],
    [ "CoAP_FindInteractionByMessageIdAndEp", "coap__interaction_8h.html#a1aa545537a0d2fe2198cad448e3aeb64", null ],
    [ "CoAP_FreeInteraction", "coap__interaction_8h.html#a9de9b132681e3affabfe49277e98d1cf", null ],
    [ "CoAP_GetLongestPendingInteraction", "coap__interaction_8h.html#a75bd46449621922d9a5b6f028fbb4b09", null ],
    [ "CoAP_HandleObservationInReq", "coap__interaction_8h.html#a80e92b07ae581174501feef543a03dba", null ],
    [ "CoAP_RemoveInteractionsObserver", "coap__interaction_8h.html#a8704ef39b2a3035265ea8f17cb669500", null ],
    [ "CoAP_ResetInteractionByHandle", "coap__interaction_8h.html#acf4121629bcc035c75fff9f42b927dae", null ],
    [ "CoAP_SetSleepInteraction", "coap__interaction_8h.html#a2e3aa64a65c226ad34f7e5e0ba31a3ab", null ],
    [ "CoAP_StartNewClientInteraction", "coap__interaction_8h.html#a9e4bdcfe12a3898a192b606b2092be03", null ],
    [ "CoAP_StartNewGetRequest", "coap__interaction_8h.html#adc4fa6dbc1cef349bba7e431f25f7153", null ],
    [ "CoAP_StartNewRequest", "coap__interaction_8h.html#ae724680c0433ceded466d24f87a155b6", null ],
    [ "CoAP_StartNewServerInteraction", "coap__interaction_8h.html#a17489869a3096feb0b315b82dd5291f3", null ],
    [ "CoAP_StartNotifyInteractions", "coap__interaction_8h.html#a56dd390dcb1567291bd73233e8e307b3", null ]
];