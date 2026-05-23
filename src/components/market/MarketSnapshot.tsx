"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, RefreshCw, AlertCircle, Clock } from 'lucide-react'

interface MarketData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  isUp: boolean
  lastUpdated: string
  marketStatus: 'open' | 'closed' | 'pre-market' | 'after-hours'
}

interface MarketSnapshotProps {
  className?: string
  showHeader?: boolean
  updateInterval?: number
  compact?: boolean
}

const DEFAULT_DATA: MarketData[] = [
  {
    symbol: 'NIFTY',
    name: 'NIFTY 50',
    price: 24682.50,
    change: 103.45,
    changePercent: 0.42,
    isUp: true,
    lastUpdated: new Date().toISOString(),
    marketStatus: 'closed'
  },
  {
    symbol: 'SPX',
    name: 'S&P 500',
    price: 5897.23,
    change: 35.78,
    changePercent: 0.61,
    isUp: true,
    lastUpdated: new Date().toISOString(),
    marketStatus: 'closed'
  },
  {
    symbol: 'INRUSD',
    name: 'INR/USD',
    price: 84.75,
    change: -0.12,
    changePercent: -0.14,
    isUp: false,
    lastUpdated: new Date().toISOString(),
    marketStatus: 'open'
  }
]

export function MarketSnapshot({ className = '', showHeader = true, updateInterval = 30000 }: MarketSnapshotProps) {
  const [data, setData] = useState<MarketData[]>(DEFAULT_DATA)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  const fetchMarketData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/market-snapshot')
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const result = await response.json()
      if (result.error) {
        throw new Error(result.error)
      }
      
      if (result.data && Array.isArray(result.data)) {
        setData(result.data)
        setLastUpdate(new Date())
      }
    } catch (err) {
      console.error('Failed to fetch market data:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch market data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Initial fetch
    fetchMarketData()
    
    // Set up interval for updates
    const interval = setInterval(fetchMarketData, updateInterval)
    
    return () => clearInterval(interval)
  }, [updateInterval])

  const formatPrice = (price: number, symbol: string) => {
    if (symbol === 'INRUSD') {
      return `₹${price.toFixed(2)}`
    }
    if (symbol === 'NIFTY') {
      return price.toLocaleString('en-IN', { maximumFractionDigits: 2 })
    }
    return price.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }

  const formatChange = (change: number, changePercent: number, isUp: boolean) => {
    const sign = isUp ? '+' : ''
    return {
      absolute: `${sign}${change.toFixed(2)}`,
      percent: `${sign}${changePercent.toFixed(2)}%`
    }
  }

  const getMarketStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-green-500 dark:text-green-400'
      case 'closed': return 'text-red-500 dark:text-red-400'
      case 'pre-market': return 'text-yellow-500 dark:text-yellow-400'
      case 'after-hours': return 'text-blue-500 dark:text-blue-400'
      default: return 'text-gray-500 dark:text-gray-400'
    }
  }

  const getMarketStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Market Open'
      case 'closed': return 'Market Closed'
      case 'pre-market': return 'Pre-Market'
      case 'after-hours': return 'After Hours'
      default: return 'Unknown'
    }
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm ${className}`}>
      {showHeader && (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
            Live Market Snapshot
          </h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Clock className="w-3 h-3" />
              <span>Updated {lastUpdate.toLocaleTimeString()}</span>
            </div>
            <button
              onClick={fetchMarketData}
              disabled={loading}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
              title="Refresh data"
            >
              <RefreshCw className={`w-4 h-4 text-gray-600 dark:text-gray-300 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      )}
      
      <div className="p-4">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-3 mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-700 dark:text-red-400">{error}</span>
          </motion.div>
        )}
        
        <div className="grid gap-4">
          {data.map((item, index) => {
            const { absolute, percent } = formatChange(item.change, item.changePercent, item.isUp)
            
            return (
              <motion.div
                key={item.symbol}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getMarketStatusColor(item.marketStatus)} bg-current bg-opacity-10`}>
                      {getMarketStatusText(item.marketStatus)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {item.symbol}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                    {formatPrice(item.price, item.symbol)}
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    item.isUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {item.isUp ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span>{absolute}</span>
                    <span>({percent})</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center py-4"
          >
            <RefreshCw className="w-5 h-5 animate-spin text-gray-400" />
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Updating...</span>
          </motion.div>
        )}
        
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Data provided by Finnhub • Updates every {updateInterval / 1000}s during market hours
          </p>
        </div>
      </div>
    </div>
  )
}