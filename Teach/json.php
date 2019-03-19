<?php

$data = '{"astring":"this is a string, once again","itsabool":true,"itsanum":3.14,"ohanull":null,"sanarray":[1,3,"shit",null,true,"whatever"],"anobject":{"ohreally":"yes","itstheend":true}}';
var_export(json_decode($data,true));
