module.exports = {
  /*
    |--------------------------------------------------------------------------
    | Application Port
    |--------------------------------------------------------------------------
    |
    | This value is the port number your application will be listening to. 
    | This value is used to allow your application to accept connections on specified 
    | port number. By default it will assign port 8080. Set this in your ".env" file.
    */

  PORT: process.env.PORT || 4000,

  /*
    |--------------------------------------------------------------------------
    | Application Host
    |--------------------------------------------------------------------------
    |
    | This value is the host address (IPv6/IPv4) of your application. 
    | This value is used to allow your application to accept connections on 
    | the specified IPv6 address (::) or IPv4 address (0.0.0.0) address. 
    | By default it will 0.0.0.0. Set this in your ".env" file.
    */

  HOST: process.env.HOST || '0.0.0.0',

  /*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" your application is currently
    | running in. This may determine how you prefer to configure various
    | services your application utilizes. Set this in your ".env" file.
    |
    */

  ENV: process.env.ENV || 'local',
};
